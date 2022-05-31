import React from "react";

import './UsersSearch.css';

const UsersSearch = (props) => {
    return (
        <div className="users__search">
            <div className="users__input-container">
                <i className="fa fa-search"></i>
                <input type="text" className="users__searching" id="users__searching" placeholder="User name..." />
            </div>
        </div>
    );
};

export default UsersSearch;