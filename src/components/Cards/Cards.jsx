/**
 * Component to render the cards
 * 
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Users from '/src/lib/UsersFront.jsx'
import cardStyles from './Cards.module.scss'
import Card from './Card/Card.jsx';
import UserForm from './Form/Form.jsx';
import Details from './Details/Details.jsx';
import Select from '/src/components/Helpers/Select/Select.jsx';

function Cards(props) {

        let userType = 'all';
        const [showAddButton, setShowAddButton] = useState(true);
        const [users, setUsers] = useState(new Users().get(userType));

        /**
        * Show user form
        * 
        */
        const [showForm, setShowForm] = useState({ person: {}, show: false, errors: [] });
        function openForm(personToShow, e) {
                let data = { person: personToShow, show: true, errors: [] };
                setShowForm(data)
        }

        /**
         * Close user form
         * 
         */
        function closeForm() {
                setShowForm({ person: {}, show: false, errors: [] })
        }

        /**
         * Show user details
         * 
         * 
         */
        const [showDetails, setShowDetails] = useState({ person: {}, show: false });
        function openDetails(personToShow, e) {
                let data = { person: personToShow, show: true };
                setShowDetails(data)
        }

        /**
         * Close details
         * 
         */
        function closeDetails() {
                setShowDetails({ person: {}, show: false })
        }

        /**
        * Delete user
        * 
        * @param {*} userProps 
        */
        function deleteUser(userProps) {

                let confirmMessage = 'Are you sure you want to delete ' +
                        userProps.userProps.name + ' ' +
                        userProps.userProps.familyName + '?';
                if (confirm(confirmMessage)) {
                        new Users().delete(userProps.userProps.id);
                        users.splice(userProps.index, 1);
                        updateUser();
                        let message = "User " +
                                userProps.userProps.name + " " +
                                userProps.userProps.familyName +
                                " is deleted.";

                        props.emitMessages({ status: "ok", messages: [message], });
                }
        }

        /**
         * Update users list when a form item is updated
         * 
         */
        function updateUser() {
                setUsers((previousUsers) => {
                        return [...previousUsers];
                });
        }

        /**
         * Save user
         * 
         * @param {*} userProps 
         */
        function saveUser(userProps) {
                let result = new Users().save(userProps);
                if (result.status == 'OK') {
                        closeForm();
                        setShowAddButton(true);
                } else {
                        let data = { person: userProps, show: true, errors: result.messages };
                        setShowForm(data)
                        result.messages = [];
                }
                props.emitMessages(result);
        }

        /**
         * Open add user from
         * 
         */
        function openAddUserForm() {
                const type = userType != 'all' ? userType : null;
                users.unshift(new Users().create(type));
                setShowAddButton(false);
                let data = { person: users[0], show: true, errors: [] };
                setShowForm(data)
        }

        /**
         * Define the visibility of the add button
         * 
         */
        function addButtonClass() {
                if (showAddButton) {
                        return cardStyles.addButton;
                }
                return cardStyles.addButtonHidden;
        }

        /**
         * Handle change user type select
         * 
         */
        const handleSelectChange = (value) => {
                userType = value;
                setUsers(new Users().get(userType));
        };

        return (
                <>
                        <div className={cardStyles.topWrapper}>
                                <Button
                                        className={addButtonClass()}
                                        onClick={openAddUserForm} title="Add User" >
                                        +
                                </Button>
                                <div className={cardStyles.userType}>
                                        <p className={cardStyles.userTypeText}> Selected user type :&nbsp;</p>
                                        <Select
                                                name='name'
                                                options={Users.typeMenu({})}
                                                class={cardStyles.select}
                                                selected={userType}
                                                emitChange={handleSelectChange}
                                        />
                                </div>
                        </div>

                        <div className={cardStyles.clear}>&nbsp;</div>
                        <div className={cardStyles.cardsWrapper}>
                                <div className={cardStyles.cardsWrapperInner}>
                                        {
                                                users.map((person, index) => {
                                                        if (person.id != undefined) {
                                                                return (
                                                                        <Card
                                                                                key={"card_" + index}
                                                                                person={person}
                                                                                index={index}
                                                                                emitOpenForm={openForm}
                                                                                emitOpenDetails={openDetails}
                                                                                emitDeleteUser={deleteUser}
                                                                        />

                                                                )
                                                        } else {
                                                                return (<></>);
                                                        }
                                                })}

                                </div>
                        </div>

                        <Details
                                data={showDetails}
                                emitCloseDetails={closeDetails}
                        />

                        <UserForm
                                data={showForm}
                                emitCloseForm={closeForm}
                                emitUpdateUser={updateUser}
                                emitSaveUser={saveUser}
                                emitDeleteUser={deleteUser}
                        />
                </>

        )
}

Cards.propTypes = {
        emitMessages: PropTypes.func,   // send a message to the common message box
};

export default Cards