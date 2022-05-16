import React from "react";

import './UserInfo.css';

const UserInfo = ({title, text}) => {
    return (
        <div className="about-me__user-info user-info">
            <div className="user-info__sub-title">{title}</div>
            <div className="user-info__description">{text}</div>
            <div className="line"></div>
        </div>
    )
};

export default UserInfo;