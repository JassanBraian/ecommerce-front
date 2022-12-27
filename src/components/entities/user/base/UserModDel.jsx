import React, { useContext } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import UserContext from '../../../../context/user/UserContext';

const UserModDel = ({ showModDel, setShowModDel }) => {

    const { user, deleteUser } = useContext(UserContext);

    const handleConfirmDelete = async e => {
        e.preventDefault();
        await deleteUser(user._id);
        setShowModDel(false);
    }

    return (
        <>
            <Modal show={showModDel} centered>
                <Modal.Header>
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this User?</p>
                </Modal.Body>

                <Modal.Footer>
                    <ButtonGroup>
                        <Button
                            variant="danger"
                            onClick={handleConfirmDelete}
                        >Delete</Button>
                        <Button
                            variant="secondary"
                            onClick={() => setShowModDel(false)}
                        >Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserModDel;