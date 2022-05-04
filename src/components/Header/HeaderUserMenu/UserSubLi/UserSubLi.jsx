import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UserSubLi.css';
import { NavLink } from 'react-router-dom';

const UserSubLi = ({text, icon, link}) => {
    return (
        <li className="header__sub-ul-li">
            <NavLink to={link} className="header__sub-ul-link">
                <div className="header__sub-ul-link-name">{text}</div>
                <FontAwesomeIcon icon={icon} className="header__sub-ul_icon" />
            </NavLink>
        </li>
    );
};

export default UserSubLi;