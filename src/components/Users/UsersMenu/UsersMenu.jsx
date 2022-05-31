import React from 'react';

import './UsersMenu.css';

const UsersMenu = (props) => {
    return (
        <div className="users__header">
            <div className="users__header-title active">
                My friends
                <span className="users__count">65</span>
            </div>
            <div className="users__header-title">
                All users
            </div>
        </div>
    );
};

export default UsersMenu;