import React, { useEffect, useState, useContext } from 'react';
import { Modal, Form, Button, ButtonGroup } from 'react-bootstrap';
import UserContext from '../../../../context/user/UserContext';

const UserModView = ({ showModView, setShowModView }) => {

    const { user } = useContext(UserContext);

    const initialValue = {
        name: '',
        surname: '',
        email: '',
        role: '',
    }
    const [formUser, setFormUser] = useState(initialValue);
    const { name, surname, email, role } = formUser;

    useEffect(() => {
        Object.keys(user).length > 0
            && setFormUser(user);
    }, [user]);

    return (
        <>
            <Modal
                show={showModView}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Detail User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                value={name}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su apellido"
                                value={surname}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su email"
                                value={email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Select value={role} disabled>
                                <option value={'client'}>Cliente</option>
                                <option value={'admin'}>Admin</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant='success' disabled>Save</Button>
                        <Button variant='danger' onClick={() => setShowModView(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserModView;