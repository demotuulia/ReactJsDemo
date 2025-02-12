/**
 * Form to edit users
 * 
 */

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

import Users from '/src/lib/UsersFront.jsx';
import formStyles from './Form.module.scss'
import Messages from '/src/components/Helpers/Messages/Messages.jsx'

function Form(props) {
    let propsPerson = props.data.person;
    const [userType, setUserType] = useState({ label: '', value: '' });
    const [photo, setPhoto] = useState('');
    const photoLabels = Users.photos({});

    useEffect(() => {
        setShow(props.data.show);
        setPerson(props.data.person);

        if (propsPerson.type != userType.value) {
            setUserType(
                {
                    value: propsPerson.type
                }
            );
            setPhoto(propsPerson.photo)
        }
    });

    /**
     * Properties to handle te modal
     */
    const [show, setShow] = useState(false);
    const [person, setPerson] = useState({});

    /**
     * Close modal
     */
    function handleClose() {
        setShow(false);
        props.emitCloseForm();
    }

    /**
      * Handle change of a text field
      * 
      */
    const handleChange = (e) => {
        props.data.person[e.target.name] = e.target.value;
        props.emitUpdateUser(props.data);
    };

    /**
     * Handle change of a select field
     * 
     */
    const handleSelectChange = (value, actionMeta) => {
        props.data.person[actionMeta.name] = value.value;

        if (actionMeta.name == 'photo') {
            setPhoto(value.value);
        }
        props.emitUpdateUser();
    };

    /**
     * Handle submit button
     * 
     * @param {*} e 
     */
    function handleSubmit(e) {
        e.preventDefault();
        props.emitSaveUser(props.data.person);
    }

   /**
    *  Render error messages
    * 
    * @returns void
    */
    function ErrorMessages() {

        if (props.data.errors.length == 0) {
            return (<></>)
        }
        return (<>
            <Messages messages={
                { status: 'error', messages: props.data.errors }
            } />
        </>);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                className={formStyles.modalBackground}
                size="lg"
                centered
            >
                <Modal.Header className={formStyles.modal} closeButton>
                    <Modal.Title className={formStyles.title}>{person.name} {person.familyName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={formStyles.modal}>
                    <ErrorMessages />
                    <form>
                        <table className={formStyles.table}>
                            <tbody>
                                <tr>
                                    <td colSpan="4" className={formStyles.photoCell}>
                                        <img className={formStyles.photo} src={photo} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>First Name*&nbsp;:&nbsp;</th>
                                    <td>
                                        <input
                                            className={formStyles.input}
                                            onChange={handleChange}
                                            value={propsPerson.name}
                                            name="name"
                                        />
                                    </td>
                                    <th>Family Name*&nbsp;:&nbsp;</th>
                                    <td>
                                        <input
                                            className={formStyles.input}
                                            onChange={handleChange}
                                            value={propsPerson.familyName}
                                            name="familyName"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>City*&nbsp;:&nbsp;</th>
                                    <td>
                                        <input
                                            className={formStyles.input}
                                            onChange={handleChange}
                                            value={propsPerson.city}
                                            name="city"
                                        />
                                    </td>
                                    <th>Age*&nbsp;:&nbsp;</th>
                                    <td>
                                        <input
                                            type="number"
                                            className={formStyles.input}
                                            onChange={handleChange}
                                            value={propsPerson.age}
                                            name="age"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Type&nbsp;:&nbsp;</th>
                                    <td>
                                        <Select
                                            name="type"
                                            onChange={(value, actionMeta) => handleSelectChange(value, actionMeta)}
                                            className={formStyles.select}
                                            options= {Users.typeMenu({})}
                                            defaultValue={{
                                                label: Users.typeLabel(userType.value),
                                                value: userType.value
                                            }}
                                        />
                                    </td>
                                    <th>Photo&nbsp;:&nbsp;</th>
                                    <td>
                                        <Select
                                            name="photo"
                                            onChange={(value, actionMeta) => handleSelectChange(value, actionMeta)}
                                            className={formStyles.select}
                                            options={Users.photos({ asMenuOptions: true })}
                                            defaultValue={{
                                                label: photoLabels[person.photo],
                                                value: person.photo
                                            }}
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </form>
                </Modal.Body>

                <Modal.Footer className={formStyles.modal}>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}

Form.propTypes = {
    data: PropTypes.object,                 // person data
    emitCloseForm: PropTypes.func,          // close this form
    emitUpdateUser: PropTypes.func,         // Send an update when a user is updated
    emitSaveUser: PropTypes.func,           // Save the user
    emitDeleteUser: PropTypes.func,         // Delete user
};
export default Form