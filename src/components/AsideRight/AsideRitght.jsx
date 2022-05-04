import React from "react";
import { NavLink } from "react-router-dom";

import avaDefaultPng from '../../assets/img/avaDefault.png';
import './AsideRitght.css';
import Friends from "./Friends/Friends";

const AsideRitght = (props) => {
    return (
        <aside className="aside-right aside-user aside-user_right">
            <div className="aside-user__container">
                <div className="friends block aside-user__friends">
                    <div className="friends__container">
                        <div className="friends__title title">My Friends</div>
                        <div className="line"></div>

                        <Friends />
                         
                        <div className="line"></div>
                        <NavLink to="#" className="friends__show-friends">Посмотреть всех...</NavLink>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AsideRitght;