import React from "react";
import UserItemMethod from "./UserItemMethod/UserItemMethod";

import './UserItemMethods.css';

const UserItemMethods = (props) => {
    let friendsId = props.friends.map(u => u.id);

    return (
        <div className="user__methods">
            {
                friendsId.includes(props.userId) &&
                    <div className={"user__method_delete"}>
                        <UserItemMethod title={"delete friend"} method={props.deleteFriend} userId={props.userId} />
                    </div>
            }
            {
                !friendsId.includes(props.userId) &&
                    <UserItemMethod title={"add to friend"} method={props.addFriend} userId={props.userId} />
            }
        </div>
    );
};

export default UserItemMethods;