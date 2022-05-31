import React from 'react';
import UserItem from './UserItem/UserItem';

import './UsersItem.css';

const UsersItems = ({users}) => {
    return (
        <div className="users__items">
            {
                users.map((u, key) => {
                    return <UserItem key={key} name={u.aboutMe.name}
                        lastName={u.aboutMe.lastName}
                        languages={u.languages}
                        ava={u.img.ava} />
                })
            }
        </div>
    )
};

export default UsersItems;