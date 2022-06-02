import React from 'react';

import UserMenuItem from './UserMenuItem/UserMenuItem';

import './UsersMenu.css';

const UsersMenu = ({setAllUsers, getMyFriends, friendsCount, ...props}) => {
    // let isShownFriends = props.isAuth && friendsCount !== 0;

    return (
        <div className="users__header">
            {
                props.isAuth && 
                    <UserMenuItem method={getMyFriends} title={"My friends"} count={friendsCount} />
            } 
            <UserMenuItem method={setAllUsers} title={"All users"} />
        </div>
    );
};

export default UsersMenu;