import React from "react";

import avaDefault from '../../assets/img/avaDefault.png';
import './AsideUser.css';

const AsideUser = (props) => {
    return (
        <aside class="aside-left aside-user aside-user_left">
            <div class="aside-user__container __container-aside_left">
                <div class="user-mini aside-user__user-mini block">
                    <div class="user-mini__container">
                        <div class="user-mini__top">
                            <div class="user-mini__back"></div>
                        </div>
                        <div class="user-mini__bottom">
                            <div class="user-mini__ava">
                                <div class="user-mini__ava-img">
                                    <img src={avaDefault} alt="background japan"/>
                                </div>
                                <a href="#" class="user-mini__name title">Mister Bin</a>
                            </div>
                            <div class="line"></div>
                            <div class="user-mini__status">
                                It’s my very beautifule status.
                                Eee man.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="menu aside-user-menu block">
                    <div class="menu__container">
                        <ul class="menu__ul">
                            <li class="menu__li">
                                <div class="menu__li-container">
                                    <div class="menu__header title">My Profile</div>
                                    <i class="fa-solid fa-chevron-up menu_header-icon"></i>
                                </div>

                                <ul class="menu__sub-ul">
                                    <li class="menu__sub-li">
                                        <a href="profile.html" class="menu__sub-link">
                                            <i class="fa-solid fa-house"></i>
                                            <div class="menu__sub-li-title">Home</div>
                                        </a>
                                    </li>
                                    <li class="menu__sub-li">
                                        <a href="#" class="menu__sub-link">
                                            <i class="fa-regular fa-circle-user"></i>
                                            <div class="menu__sub-li-title">About me</div>
                                        </a>
                                    </li>
                                    <li class="menu__sub-li">
                                        <a href="users.html" class="menu__sub-link">
                                            <i class="fa-solid fa-user-group"></i>
                                            <div class="menu__sub-li-title">Friends</div>
                                        </a>
                                    </li>
                                    <li class="menu__sub-li">
                                        <a href="messages.html" class="menu__sub-link">
                                            <i class="fa-solid fa-message"></i>
                                            <div class="menu__sub-li-title">Сообщения</div>
                                        </a>
                                    </li>
                                    <li class="menu__sub-li">
                                        <a href="index.html" class="menu__sub-link">
                                            <i class="fa-solid fa-newspaper"></i>
                                            <div class="menu__sub-li-title">News</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AsideUser;