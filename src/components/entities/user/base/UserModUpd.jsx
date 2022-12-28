import React, { useEffect, useState, useContext } from 'react';
import { Modal, Form, Button, ButtonGroup } from 'react-bootstrap';
import UserContext from '../../../../context/user/UserContext';

const UserModUpd = ({ showModUpd, setShowModUpd }) => {

    const { user, updateUser } = useContext(UserContext);

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

    const handleOnChange = e => {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async e => {
        e.preventDefault();
        await updateUser(formUser);
        setShowModUpd(false);
    }

    return (
        <>
            <Modal
                show={showModUpd}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Actualizar Usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Ingrese su nombre"
                                value={name}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name='surname'
                                type="text"
                                placeholder="Ingrese su apellido"
                                value={surname}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                type="text"
                                placeholder="Ingrese su email"
                                value={email}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Select
                                name='role'
                                value={role}
                                onChange={handleOnChange}
                            >
                                <option value={'client'}>Cliente</option>
                                <option value={'admin'}>Admin</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant='success' onClick={handleOnSubmit}>Save</Button>
                        <Button variant='danger' onClick={() => setShowModUpd(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserModUpd;