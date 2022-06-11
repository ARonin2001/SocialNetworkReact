import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../../assets/img/avaDefault.png';

import './DialogsHostiryMessageMe.css';

const DialogsHostiryMessageMe = ({ userId, ava, name, message }) => {
    let avaImg = ava ? window.origin + ava : avaDefault;

    return (
        <div className="d-history__message message message__me">
            <div className="message__content">
                <NavLink to={`/profile/${userId}`} className="message__name">
                    {name}
                </NavLink>
                <div className="message__content-dialog">
                    {message}
                </div>
            </div>
            <NavLink to={`/profile/${userId}`} className="message__ava">
                <img src={avaImg} alt="ava" className="message__ava-img" />
            </NavLink>
        </div>

    );
};

export default DialogsHostiryMessageMe;