import React from 'react'

import UsersItemContainer from './UsersItems/UsersItemContainer';
import UsersMenu from './UsersMenu/UsersMenu';
import UsersSearchContainer from './UsersSearch/UsersSearchContainer';

import './Users.css';
import UsersMenuContainer from './UsersMenu/UsersMenuContainer';


const Users = (props) => {
    return (
        <div className="content__users users block">
            <div className="users__container p-13">
                <UsersMenuContainer />
                <div className="line"></div>
                <UsersSearchContainer />
                <div className="line"></div>
                <UsersItemContainer />
                
            </div>
        </div>
    );
};

export default Users;