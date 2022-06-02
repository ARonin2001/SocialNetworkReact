import React from 'react';

import './UserMenuItem.css';

const UserMenuItem = ({title, count, ...props}) => {
    return (
        <div className={`users__header-title`} onClick={props.method}>
            {title}
            { count && <span className="users__count">{count}</span> } 
        </div>
    );
};

export default UserMenuItem;