import React from "react";

import avaDefault from '../../../../../assets/img/avaDefault.png'

import './UserItemLeft.css';

import { NavLink } from "react-router-dom";

const UserItemLeft = ({ava, id}) => {
    const host = window.origin;

    const avaImg = ava ? host + ava : avaDefault;
    return (
        <div className="user__item_left">
            <NavLink to={`/profile/${id}`} className="user__ava">
                <img src={avaImg} alt="user" className="users__ava-img" />
            </NavLink>
        </div>
    );
};

export default UserItemLeft;