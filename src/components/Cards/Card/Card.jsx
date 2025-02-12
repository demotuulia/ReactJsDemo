/**
 * Component to render a card of one user
 * 
 */

import PropTypes from 'prop-types';

import cardStyles from './Card.module.scss'
import user from '/src/lib/UsersFront.jsx';
import viewIcon from '/src/assets/view.png';
import editIcon from '/src/assets/edit.png';
import deleteIcon from '/src/assets/trash.png';


function Card(props) {
    let person = props.person;
    let index = props.index;

    /**
    *  Get the type icon
    * 
    * @param string type 
    * @returns string
    */
    function getTypeIcon(type) {
        return user.typeIcon(type);
    }

    return (
        <>
            <div className={cardStyles.card} key={'card' + index}>
                <img className={cardStyles.photo} src={person.photo} />
                <div className={cardStyles.cardText}>
                    <img className={cardStyles.userTypeImg} src={getTypeIcon(person.type)} />
                    <p className={cardStyles.userType} >{user.typeLabel(person.type)}</p>
                    <p
                        className={cardStyles.name}
                        onClick={(e) => props.emitOpenDetails(person, e)}
                    >
                        &nbsp;<br />{person.name}  {person.familyName}
                    </p>
                </div>
                <p className={cardStyles.buttons}>
                    <img
                        src={deleteIcon}
                        title="Delete"
                        className={cardStyles.button}
                        onClick={(e) => props.emitDeleteUser({ userProps: person, index: index }, e)}
                    />
                    <img
                        src={editIcon}
                        title="Edit"
                        className={cardStyles.button}
                        onClick={(e) => props.emitOpenForm(person, e)}
                    />
                    <img
                        src={viewIcon}
                        title="View"
                        onClick={(e) => props.emitOpenDetails(person, e)}
                        className={cardStyles.button}
                    />
                </p>
            </div>
        </>
    );
}

Card.propTypes = {

    person: PropTypes.object,           // data of the person to show
    index: PropTypes.number,            // index of the person in the array users
    emitOpenForm: PropTypes.func,       // Open the edit form
    emitOpenDetails: PropTypes.func,    // Show the details
    emitDeleteUser: PropTypes.func,     // Delete user
};

export default Card