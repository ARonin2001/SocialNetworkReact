import React from "react";

import './Friends.css'
import FriendsColumn from "./FriendsColumn/FriendsColumn";

const Friends = (props) => {
    return (
        <div className="friends__list">
            <div className="friends__rows">
                {
                    props.users.map(user => {
                        if(props.friends.includes(user._id)) {
                            return <FriendsColumn key={user._id} 
                                id={user._id}
                                name={user.aboutMe.name}
                                ava={user.img.ava} />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Friends;