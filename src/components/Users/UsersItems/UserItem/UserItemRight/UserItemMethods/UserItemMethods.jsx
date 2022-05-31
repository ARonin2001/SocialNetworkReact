import React from "react";
import UserItemMethod from "./UserItemMethod/UserItemMethod";

import './UserItemMethods.css';

const UserItemMethods = (props) => {
    return (
        <div className="user__methods">
            <UserItemMethod />
        </div>
    );
};

export default UserItemMethods;