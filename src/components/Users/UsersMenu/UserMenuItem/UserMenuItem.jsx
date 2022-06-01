import React, {useState} from 'react';

import './UserMenuItem.css';

const UserMenuItem = ({title, count, ...props}) => {
    let [isActive, setActive] = useState(false);

    const setItemActive = () => setActive(true);
    const setItemUnactive = () => setActive(false);

    return (
        <div className={`users__header-title ${isActive ? 'active': ''}`} onClick={props.method}>
            {title}
            { count && <span className="users__count">{count}</span> } 
        </div>
    );
};

export default UserMenuItem;