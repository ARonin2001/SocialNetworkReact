import React from "react";
import { NavLink } from "react-router-dom";

import '../../Auth.css';

const AuthFormFooter = (props) => {
    return (
        <div className="auth__form_bottom">
            <div className="auth__form_left">
                <button type="button" className="btn login__log-in">{props.btnName}</button>
            </div>
            <div className="auth__form_right">
                <NavLink to="#" className="auth__link">Forgot Password</NavLink>
                <NavLink to="/auth/login" className="auth__link">Login</NavLink>
            </div>
        </div>
    );
};

export default AuthFormFooter;