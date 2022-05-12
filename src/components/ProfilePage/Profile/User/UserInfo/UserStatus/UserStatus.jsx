import React from 'react';

import './UserStatus.css';

const UserStatus = ({status, OnEditStatus}) => {
    return (
        <div className="user__status" onDoubleClick={OnEditStatus}>
            {status}
        </div>
    );
};

export default UserStatus