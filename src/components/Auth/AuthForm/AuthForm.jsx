import React from "react";

import '../Auth.css';
import AuthFormFooter from "./AuthFormFooter/AuthFormFooter";

const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} noValidate>
            <div className="auth__inputs-container">
                {props.children}
            </div>
            <button type="submit">LOGIN</button>
            {/* <AuthFormFooter btnName={"REGISTER"} /> */}
        </form >
    );
};

export default AuthForm;