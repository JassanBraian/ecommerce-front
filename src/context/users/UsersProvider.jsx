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
  }

  return (
    <UsersContext.Provider value={{ 
      ...values,
      getUsers
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider