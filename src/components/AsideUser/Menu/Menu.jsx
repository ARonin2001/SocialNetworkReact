import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import './Menu.css';
import SubLiMenu from "./SubLiMenu/SubLiMenu";

import { accordionBlock } from "../../Header/HeaderLogic";

const menuToggle = (e) => {
    const menuSubUl = document.querySelector('.menu__sub-ul');

    let target = e.target;

    if(!target.classList.contains('active'))
        target.classList.add('active');
    else
        target.classList.remove('active');

    accordionBlock(menuSubUl)
}

const Menu = ({subLi, isAuth}) => {

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
                            {
                                subLi.map((li, key) => {
                                    if(li.title.toLowerCase() === "home" && !isAuth)
                                        return <SubLiMenu key={key} subTitle={li.title} icon={li.icon} link={"/auth/login"}  />
                                    return <SubLiMenu key={key} subTitle={li.title} icon={li.icon} link={li.link}/>
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;