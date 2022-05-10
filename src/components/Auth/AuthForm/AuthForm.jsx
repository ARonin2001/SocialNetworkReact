import React from "react";

import '../Auth.css';
import AuthFormFooter from "./AuthFormFooter/AuthFormFooter";

const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className="auth__inputs-container">
                {props.children}
            </div>
            
            <AuthFormFooter btnName={"REGISTER"} />
            
        </form >
    );
};

export default AuthForm;