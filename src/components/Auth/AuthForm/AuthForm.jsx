import React from "react";

import '../Auth.css';
import AuthFormFooter from "./AuthFormFooter/AuthFormFooter";

const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} noValidate>
            <div className="auth__inputs-container">
                {props.children}
            </div>
            <AuthFormFooter link={props.link} linkText={props.linkText} btnText={props.btnText} />
        </form >
    );
};

export default AuthForm;