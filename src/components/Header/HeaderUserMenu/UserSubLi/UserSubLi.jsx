import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import './UserSubLi.css';

const UserSubLi = (props) => {
    return (
        <li className="header__sub-ul-li">
            <a href="#" className="header__sub-ul-link">
                <div className="header__sub-ul-link-name">Exit</div>
                <FontAwesomeIcon icon={faPersonThroughWindow} className="header__sub-ul_icon" />
            </a>
        </li>
    );
};

export default UserSubLi;