import React, { useState, useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import UserContext from '../../../../context/user/UserContext';
import UserModView from './UserModView';
import UserModUpd from './UserModUpd';
import UserModDel from './UserModDel';

const UserFunc = ({ userId }) => {

    const [showModView, setShowModView] = useState(false);
    const [showModUpd, setShowModUpd] = useState(false);
    const [showModDel, setShowModDel] = useState(false);

    const { getUser } = useContext(UserContext);
    return (
        <>
            <ButtonGroup>
                <Button
                    variant="info"
                    onClick={() => {
                        getUser(userId);
                        setShowModView(true);
                    }}
                >Detail</Button>
                <Button
                    variant="success"
                    onClick={() => {
                        // getUser(userId);
                        // setShowModUpd(true)
                    }}
                >Role</Button>
                <Button
                    variant="warning"
                    onClick={() => {
                        getUser(userId);
                        setShowModUpd(true)
                    }}
                >Edit</Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        getUser(userId);
                        setShowModDel(true);
                    }}
                >Delete</Button>
            </ButtonGroup>

            <UserModView
                showModView={showModView}
                setShowModView={setShowModView}
            />

            <UserModUpd
                showModUpd={showModUpd}
                setShowModUpd={setShowModUpd}
            />

            <UserModDel
                showModDel={showModDel}
                setShowModDel={setShowModDel}
            />
        </>
    );
};

export default UserFunc;