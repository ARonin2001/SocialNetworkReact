import React from "react";
import { NavLink } from "react-router-dom";

import '../../Auth.css';

const AuthFormFooter = (props) => {
    return (
        <div className="auth__form_bottom">
            <div className="auth__form_left">
                <button type="submit" className="btn login__log-in">{props.btnText}</button>
            </div>
            <div className="auth__form_right">
                <NavLink to="#" className="auth__link">Forgot Password</NavLink>
                <NavLink to={props.link} className="auth__link">{props.linkText}</NavLink>
            </div>
        </div>
    );
};

export default AuthFormFooter;