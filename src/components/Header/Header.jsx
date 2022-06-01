import React from "react";

import Logo from './Logo/Logo';
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderUserMenu from "./HeaderUserMenu/HeaderUserMenu";

import './Header.css';


const Header = (props) => {
    return (
        <header id="header" className="header">
            <div className="header__container __container">
                <Logo />
                {/* Search */}
                <HeaderSearch />
                {/* Header user menu */}
                <HeaderUserMenu isAuth={props.isAuth} fullName={props.fullName} ava={props.ava} />
            </div>
        </header>
    );
}

export default Header;