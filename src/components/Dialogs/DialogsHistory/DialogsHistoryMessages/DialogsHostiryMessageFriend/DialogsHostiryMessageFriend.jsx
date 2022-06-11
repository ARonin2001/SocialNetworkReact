import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../../assets/img/avaDefault.png';

import './DialogsHostiryMessageFriend.css';

const DialogsHostiryMessageFriend = ({userId, ava, name, message }) => {
    let avaImg = ava ? window.origin + ava : avaDefault;

    return (
        <div className="d-history__message message message__friend">
            <NavLink to={`/profile/${userId}`} className="message__ava">
                <img src={avaImg} alt="ava" className="message__ava-img" />
            </NavLink>
            <div className="message__content">
                <NavLink to={`/profile/${userId}`} className="message__name">
                    {name}
                </NavLink>
                <div className="message__content-dialog block">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default DialogsHostiryMessageFriend;