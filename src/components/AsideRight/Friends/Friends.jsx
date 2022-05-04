import React from "react";

import './Friends.css'
import FriendsRow from "./FriendsRow/FriendsRow";

const Friends = (props) => {
    return (
        <div className="friends__list">
            <div className="friends__rows">
                <FriendsRow/>
                <FriendsRow/>
            </div>
        </div>
    );
};

export default Friends;