import React from "react";

import './Footer.css';
import FooterLi from "./FooterLi/FooterLi";

const Footer = (props) => {
    return (
        <footer id="footer" class="footer">
            <div class="footer__container">
                <ul class="footer__ul">
                    <FooterLi linkText="My Page" />
                    <FooterLi linkText="About me" />
                    <FooterLi linkText="Friends" />
                    <FooterLi linkText="Messages" />
                    <FooterLi linkText="News" />
                </ul>
            </div>
        </footer>
    );
};

export default Footer;