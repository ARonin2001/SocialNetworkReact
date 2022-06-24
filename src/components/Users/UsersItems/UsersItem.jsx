import React from 'react';
import UserItem from './UserItem/UserItem';

import './UsersItem.css';

const UsersItems = ({users, addFriend, deleteFriend, addChat, ...props}) => {
    return (
        <div className="users__items">
            {
                users.map((u, key) => {
                    if(u._id !== props.userId) {
                        return <UserItem key={key} 
                            id={u._id}
                            userId={props.userId}
                            isAuth={props.isAuth}
                            
                            name={u.aboutMe.name}
                            lastName={u.aboutMe.lastName}

                            languages={u.languages}
                            ava={u.img.ava} 

                            addFriend={addFriend}
                            deleteFriend={deleteFriend}
                            addChat={addChat}

                            friends={props.friends} />
                    }
                    
                })
            }
        </div>
    )
};

export default UsersItems;