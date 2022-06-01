import React from "react";
import { NavLink } from "react-router-dom";

import './UserItemName.css';

const UserItemName = ({id, name, lastName}) => {
    return (
        <NavLink to={`/profile/${id}`} className="user-item__name title">
            {`${name} ${lastName}`}
        </NavLink>
    );
};

export default UserItemName;