import React from 'react';

import UserMenuItem from './UserMenuItem/UserMenuItem';

import './UsersMenu.css';

const UsersMenu = ({setAllUsers, getMyFriends}) => {
    return (
        <div className="users__header">
            <UserMenuItem method={getMyFriends} title={"My friends"} count={65} />
            <UserMenuItem method={setAllUsers} title={"All users"} />
        </div>
    );
};

export default UsersMenu;