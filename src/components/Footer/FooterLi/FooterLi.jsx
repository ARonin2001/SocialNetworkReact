import React from "react";
import { NavLink } from "react-router-dom";

import './FooterLi.css';

const FooterLi = ({linkText}) => {
    return (
        <li className="footer__li">
            <NavLink to="#" href="#" className="footer__link">{linkText}</NavLink>
        </li>
    );
};

export default FooterLi;