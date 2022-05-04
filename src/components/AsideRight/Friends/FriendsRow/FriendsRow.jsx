import React from "react";
import FriendsColumn from "../FriendsColumn/FriendsColumn";

import './FriendsRow.css';

const FriendsRow = (props) => {
    return (
        <div className="friends__row">
            <FriendsColumn/>
            <FriendsColumn/>
            <FriendsColumn/>
            <FriendsColumn/>
        </div>
    );
};

export default FriendsRow;