import React from "react";
import '../HeaderContainer.js';

import avaDefault from '../../../assets/img/avaDefault.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './HeaderUserMenu.css';
import UserSubLi from "./UserSubLi/UserSubLi";
import { accordionBlock } from "../HeaderLogic.js";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";


// menu
// так делать нельзя
const toggleHeaderSubUl = (e) => {
    let tartget = e.target;

    const headerUl = document.querySelector('.header__ul'),
        headerSubUl = document.querySelector('.header__sub-ul');
    headerUl.classList.toggle('header__ul_active');
    headerSubUl.classList.toggle('header__sub-ul_active');

    accordionBlock(headerSubUl);
};

const HeaderUserMenu = (props) => {
    let avaImg = props.ava ? "http://localhost:3000" + props.ava : avaDefault;

    return (
        <div className="header__user-menu">
            <div className="header__user-container">
                <ul className="header__user-ul header__ul">
                    <li className="header__ul-link" onClick={toggleHeaderSubUl}>
                        <div className="header__user-ul-container">
                            <div className="header__user-ul_left">
                                <img src={avaImg} alt="ava user" className="header__user-ul-img" />
                                <div className="header__user-ul-name">{props.fullName}</div>
                            </div>
                            <div className="header__user-ul_right">
                                <FontAwesomeIcon icon={faChevronUp} className="header__user-ul-arrow_icon" />
                            </div>
                        </div>

                        <ul className="header__user-sub-ul header__sub-ul">
                            {
                                !props.isAuth &&
                                    <>
                                        <UserSubLi text={"Login"} icon={faPersonThroughWindow} link={"/auth/login"} />
                                        <UserSubLi text={"Register"} icon={faPersonThroughWindow} link={"/auth/register"} />
                                    </>
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderUserMenu;