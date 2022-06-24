import React from "react";
import UserItemLanguages from "./UserItemLanguages/UserItemLanguages";
import UserItemMethods from "./UserItemMethods/UserItemMethods";
import UserItemName from "./UserItemName/UserItemName";

import './UserItemRight.css';

const UserItemRight = (props) => {
    return (
        <div className="user__item_right">
            <UserItemName id={props.id} name={props.name} lastName={props.lastName} />
            <UserItemLanguages languages={props.languages} />
            {
                props.isAuth &&
                    <UserItemMethods addFriend={props.addFriend} deleteFriend={props.deleteFriend} 
                        addChat={props.addChat}
                        id={props.id}
                        userId={props.userId} 
                        companionId={props.id}
                        friends={props.friends} />
            }
            
        </div>
    );
};

export default UserItemRight;