import React from "react";
import { NavLink } from "react-router-dom";

import './UserItemName.css';

const UserItemName = ({name, lastName}) => {
    return (
        <NavLink to="#" className="user-item__name title">
            {`${name} ${lastName}`}
        </NavLink>
    );
};

export default UserItemName;