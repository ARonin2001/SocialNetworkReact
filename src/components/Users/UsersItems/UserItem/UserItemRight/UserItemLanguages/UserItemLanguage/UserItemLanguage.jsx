import React from "react";

import './UserItemLanguage.css';

const UserItemLanguage = ({language}) => {
    return (
        <div className="user__language">
            {language}
        </div>
    );
};

export default UserItemLanguage;