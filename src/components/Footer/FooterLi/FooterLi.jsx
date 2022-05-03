import React from "react";
import { NavLink } from "react-router-dom";

import './FooterLi.css';

const FooterLi = ({linkText}) => {
    return (
        <li class="footer__li">
            <NavLink to="#" href="#" class="footer__link">{linkText}</NavLink>
        </li>
    );
};

export default FooterLi;