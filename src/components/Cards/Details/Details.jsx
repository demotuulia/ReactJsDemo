/**
 * Component to render the user details
 * 
 */
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import detailStyles from './Details.module.scss'
import Users from '/src/lib/UsersFront.jsx';

function Details(props) {
    const [show, setShow] = useState(false);
    const [person, setPerson] = useState({});

    function handleClose() {
        setShow(false);
        props.emitCloseDetails();
    }
    const handleShow = () => setShow(true);


    useEffect(() => {
        setShow(props.data.show);
        setPerson(props.data.person)
    });

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                className={detailStyles.modalBackground}
                size="lg"
                centered
                style={{
                    
                  }}
            >
                <Modal.Header className={detailStyles.modal} closeButton>
                    <Modal.Title className={detailStyles.title}>
                        <img className={detailStyles.userTypeImg} src={Users.typeIcon(person.type)} />
                        {person.name} {person.familyName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={detailStyles.modal}>
                    <img className={detailStyles.photo} src={person.photo} />
                    <table className={detailStyles.table}>
                        <tbody>
                            <tr>
                                <th>Function:</th><td> {    Users.typeLabel(person.type)}</td>
                            </tr>
                            <tr>
                                <th>Age:</th><td> {person.age}</td>
                            </tr>
                            <tr>
                                <th>City:</th><td> {person.city}</td>
                            </tr>
                        </tbody>
                    </table>

                </Modal.Body>
                <Modal.Footer className={detailStyles.modal}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

Details.propTypes = {
    data: PropTypes.object,             // person data
    emitCloseDetails: PropTypes.func,   // close this modal
};

export default Details