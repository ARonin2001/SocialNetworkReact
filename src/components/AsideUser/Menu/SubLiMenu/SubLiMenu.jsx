import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SubLiMenu.css';
import { NavLink } from "react-router-dom";

const SubLiMenu = ({icon, subTitle}) => {
    return (
        <li className="menu__sub-li">
            <NavLink to="profile.html" className="menu__sub-link">
                <FontAwesomeIcon icon={icon}/>
                <div className="menu__sub-li-title">{subTitle}</div>
            </NavLink>
        </li>
    );
};

export default SubLiMenu;