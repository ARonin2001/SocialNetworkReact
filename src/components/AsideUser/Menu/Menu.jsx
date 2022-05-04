import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faHome, faCircleUser, faUserGroup, faMessage, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import './Menu.css';
import SubLiMenu from "./SubLiMenu/SubLiMenu";

import { accordionBlock } from "../../Header/HeaderLogic";

const menuToggle = (e) => {
    const menuSubUl = document.querySelector('.menu__sub-ul');

    let target = e.target;

    target.classList.toggle('menu__li-container_active');
    accordionBlock(menuSubUl)
}

const Menu = (props) => {
    return (
        <div className="menu aside-user-menu block">
            <div className="menu__container">
                <ul className="menu__ul">
                    <li className="menu__li">
                        <div className="menu__li-container" onClick={menuToggle}>
                            <div className="menu__header title">My Profile</div>
                            <FontAwesomeIcon icon={faChevronUp} className="menu_header-icon"/>
                        </div>

                        <ul className="menu__sub-ul">
                            <SubLiMenu subTitle={"Home"} icon={faHome} link={"#"}/>
                            <SubLiMenu subTitle={"About me"} icon={faCircleUser} link={"#"}/>
                            <SubLiMenu subTitle={"Friends"} icon={faUserGroup} link={"#"}/>
                            <SubLiMenu subTitle={"Messages"} icon={faMessage} link={"#"}/>
                            <SubLiMenu subTitle={"News"} icon={faNewspaper} link={"/"}/>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;