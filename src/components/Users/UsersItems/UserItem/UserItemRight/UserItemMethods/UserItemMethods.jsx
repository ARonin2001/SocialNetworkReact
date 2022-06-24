import React from "react";
import { NavLink } from "react-router-dom";
import UserItemMethod from "./UserItemMethod/UserItemMethod";

import './UserItemMethods.css';

const UserItemMethods = (props) => {
    let friendsId = props.friends.map(u => u.id);
    
    return (
        <div className="user__methods">
            <NavLink to={"/dialogs"} >
                <UserItemMethod title={"push message"} method={() => props.addChat(props.companionId, props.userId)} userId={props.userId} />                        
            </NavLink>

            {
                friendsId.includes(props.id) &&
                    <div className={"user__method_delete"}>
                        <UserItemMethod title={"delete friend"} method={props.deleteFriend} userId={props.id} />
                    </div>
            }
            {
                !friendsId.includes(props.id) &&
                    <>
                        <UserItemMethod title={"add to friend"} method={props.addFriend} userId={props.id} />
                    </>
            }

        </div>
    );
};

export default UserItemMethods;