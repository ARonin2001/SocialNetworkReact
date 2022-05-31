import React from "react";
import UserItemLanguages from "./UserItemLanguages/UserItemLanguages";
import UserItemMethods from "./UserItemMethods/UserItemMethods";
import UserItemName from "./UserItemName/UserItemName";

import './UserItemRight.css';

const UserItemRight = (props) => {
    return (
        <div className="user__item_right">
            <UserItemName name={props.name} lastName={props.lastName} />
            <UserItemLanguages languages={props.languages} />
            <UserItemMethods />
        </div>
    );
};

export default UserItemRight;