import { useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import UsersList from '../components/entities/users/UsersList';
import UsersContext from '../context/users/UsersContext';
import '../css/entities/Users/AdminUsers.css';

const AdminUsers = () => {

  const { users, getUsers } = useContext(UsersContext);

  useEffect(()=>{
    getUsers();
  }, []);

  return (
    <>
      <div className='admin-users-container'>
        <div className='admin-users-title'>
          <h1>Usuarios</h1>
        </div>
        <Table striped bordered hover className='admin-users-table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Mail</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map( (user, index) => (
                <UsersList 
                key={index}
                user={user} />
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default AdminUsers