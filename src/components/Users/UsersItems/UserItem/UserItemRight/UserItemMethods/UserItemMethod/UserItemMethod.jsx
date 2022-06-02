import React from "react";

import './UserItemMethod.css';

const UserItemMethod = ({title, method, userId}) => {
    return (
        <div className="user__method" onClick={() => method(userId)}>
            {title}
        </div>
    );
};

export default UserItemMethod;