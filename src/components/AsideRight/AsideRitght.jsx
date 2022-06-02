import React from "react";
import { NavLink } from "react-router-dom";

import './AsideRitght.css';
import FriendsContainer from "./Friends/FriendsContainer";

const AsideRitght = (props) => {
    let isShownFriends = props.isAuth && props.friendsCount !== 0;

    return (
        <aside className="aside-right aside-user aside-user_right">
            <div className="aside-user__container">
                {
                    isShownFriends &&
                        <div className="friends block aside-user__friends">
                            <div className="friends__container">
                                <div className="friends__title title">My Friends</div>
                                <div className="line"></div>

                                <FriendsContainer />

                                <div className="line"></div>
                                <NavLink to="/users" className="friends__show-friends">Посмотреть всех...</NavLink>
                            </div>
                        </div>
                }

            </div>
        </aside>
    );
};

export default AsideRitght;