import React from "react";

import avaDefault from '../../../../../assets/img/avaDefault.png'

import './UserItemLeft.css';

import { NavLink } from "react-router-dom";

const UserItemLeft = ({ava}) => {
    const host = window.origin;

    // host 3000 (server host)
    // Это временное решение
    let hostServer = host;
    hostServer = hostServer.substr(0, hostServer.length-4);
    hostServer += "3000";

    const avaImg = ava ? hostServer + ava : avaDefault;


    return (
        <div className="user__item_left">
            <NavLink to="#" className="user__ava">
                <img src={avaImg} alt="user" className="users__ava-img" />
            </NavLink>
        </div>
    );
};

export default UserItemLeft;