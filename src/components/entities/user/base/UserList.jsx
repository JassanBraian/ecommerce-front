import { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import UserFunc from './UserFunc';
import UserContext from '../../../../context/user/UserContext';
import '../../../../css/entities/user/user-list.css'


const UserList = () => {
    const { users, getUsers } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className='app'>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className='text-center'>
                                        {<UserFunc userId={user._id} />}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default UserList;