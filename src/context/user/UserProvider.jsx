import React, { useState } from 'react';
import UserContext from './UserContext';
import clientAxios from "../../config/axios";

const UserProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {}
    }
    const [state, setState] = useState(initialState);

    const getUsers = async () => {
        try {
            // const res = await clientAxios.get('/api/v1/user');
            const res = await clientAxios.get('http://localhost:4000/api/v1/user');
            res && setState({ ...state, users: res.data.users });
        } catch (error) {
            throw error;
        }
    }

    const getUser = async userId => {
        try {
            // const res = await clientAxios.get('/api/v1/user');
            const res = await clientAxios.get(`http://localhost:4000/api/v1/user/${userId}`);
            res && setState({ ...state, user: res.data.user });
        } catch (error) {
            throw error;
        }
    }

    const createUser = async user => {
        try {
            // const res = await clientAxios.get('/api/v1/user');
            const res = await clientAxios.post(`http://localhost:4000/api/v1/user/`, user);
            res && await getUsers();
        } catch (error) {
            throw error;
        }
    }

    const updateUser = async user => {
        try {
            // const res = await clientAxios.get('/api/v1/user');
            const res = await clientAxios.put(`http://localhost:4000/api/v1/user/${user._id}`, user);
            res && await getUsers();
        } catch (error) {
            throw error;
        }
    }

    const deleteUser = async userId => {
        try {
            // const res = await clientAxios.get('/api/v1/user');
            const res = await clientAxios.delete(`http://localhost:4000/api/v1/user/${userId}`);
            res && await getUsers();
        } catch (error) {
            throw error;
        }
    }

    return (
        <UserContext.Provider value={{
            ...state,
            getUsers,
            getUser,
            createUser,
            updateUser,
            deleteUser
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;