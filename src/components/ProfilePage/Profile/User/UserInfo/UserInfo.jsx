import React from "react";

import './UserInfo.css';

const UserInfo = ({name, status}) => {
    return (
        <div className="user__info">
            <div className="user__name">
                {name}
            </div>
            <div className="user__status">
                {status}
            </div>
        </div>
    );
};

export default UserInfo;