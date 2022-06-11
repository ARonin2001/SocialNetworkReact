import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../assets/img/avaDefault.png';

import './DialogsHistoryHeader.css';

const DialogsHistoryHeader = ({userId, ava, name, lastName}) => {

    let avaImg = ava ? window.origin + ava : avaDefault;
    let fullName = `${name} ${lastName}`;

    return (
        <div className="d-history__header">
            <NavLink to={`/profile/${userId}`} className="d-history__ava">
                <div className="d-history__ava-img">
                    <img src={avaImg} alt="ava" className="d-history__img" />
                </div>
                <div className="d-history__ava-name">{fullName}</div>
            </NavLink>
        </div>
    );
};

export default DialogsHistoryHeader;