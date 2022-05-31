import React from 'react'

import UsersItemContainer from './UsersItems/UsersItemContainer';
import UsersMenu from './UsersMenu/UsersMenu';
import UsersSearch from './UsersSearch/UsersSearch';

import './Users.css';


const Users = (props) => {
    return (
        <div className="content__users users block">
            <div className="users__container p-13">
                <UsersMenu />
                <div className="line"></div>
                <UsersSearch />
                <div className="line"></div>
                <UsersItemContainer />
                
            </div>
        </div>
    );
};

export default Users;