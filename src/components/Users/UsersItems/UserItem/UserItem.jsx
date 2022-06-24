import React from "react";

import UserItemLeft from "./UserItemLeft/UserItemLeft";
import UserItemRight from "./UserItemRight/UserItemRight";

import './UserItem.css';

const UserItem = (props) => {
    return (
        <div className="users__item user-item">
            <div className="user__container">
                <UserItemLeft 
                    ava={props.ava}
                    id={props.id} />
                <UserItemRight 
                    id={props.id}
                    userId={props.userId}

                    isAuth={props.isAuth}
                    name={props.name}
                    lastName={props.lastName}
                    languages={props.languages} 

                    addFriend={props.addFriend}
                    deleteFriend={props.deleteFriend}
                    addChat={props.addChat}

                    friends={props.friends} />
            </div>
            <div className="line"></div>

        </div>
    );
};

export default UserItem;