import React from 'react';

import './UserStatus.css';

const UserStatus = ({status, openStatusEdit}) => {
    return (
        <div className="user__status" onDoubleClick={openStatusEdit}>
            {status}
        </div>
    );
};

export default UserStatus