import React from 'react';
import { useState } from 'react';
import clientAxios from '../../config/axios';
import UsersContext from './UsersContext';

const UsersProvider = ({ children }) => {

  const initialValues = {
    users: [],
    currentUser: {}
  };

  const [ values, setValues ] = useState(initialValues);

  const getUsers = async() =>{
    try {
      const res = await clientAxios.get('http://localhost:4000/api/v1/user');
      res && setValues({ ...values, users: res.data.users });     
    } catch (error) {
      throw error;
    }
  };

/*   const getUser = async userId =>{
    try {
      const res = await clientAxios.get(`http://localhost:4000/api/v1/user/${userId}`);
      res && setValues({ ...values, currentUser: res.data.user })
    } catch (error) {
      throw error;
    }
  }; */

  const changeUserRole = async user =>{
    try {
      if(user.role === 'admin'){
        user.role = 'usuario'
      } else if(user.role === 'usuario'){
        user.role = 'admin'
      }
      const res = await clientAxios.put(`http://localhost:4000/api/v1/user/${user._id}`, user);
      res && await getUsers();
    } catch (error) {
      throw error;
    }
  }

  return (
    <UsersContext.Provider value={{ 
      ...values,
      getUsers,/* 
      getUser, */
      changeUserRole
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider