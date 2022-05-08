import React from "react";
import {useState} from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../../Input/Input";
import '../Auth.css';
import RadioButton from "../RadioCheckButton/RadioCheckButton";
import { getLoginUser } from './../../../redux/reducers/authReducer';

const Login = (props) => {

    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");

    const changeLogin = (e) => {
        setLogin(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const authLogin = () => {
        if(login && password) {
            props.getLoginUser(login, password);

            if(props.isAuth)
                window.location.replace("http://localhost:3001/");
        }
    }

    return (
        <div className="block auth">
            <div className="auth__container">
                <h2 className="auth__title title">
                    Authorization
                </h2>
                <div className="line"></div>
                <form action="GET" className="auth__form" id="auth__form">
                    <div className="auth__inputs auth__section-row ">
                        {/* login */}
                        <Input title={"Email"} type={"email"} inputId={"input__email"} name={"user-email"} value={login} onChange={changeLogin}/>
                        {/* password */}
                        <Input title={"Password"} type={"password"} inputId={"input__password"} name={"user-password"} value={password} onChange={changePassword} />
                    </div>
                    <div className="auth__form_bottom">
                        <div className="auth__form_left">
                            <RadioButton type={"checkbox"} name={"remember"} ID={"radio-remember"} value={"Remember me"} />
                            
                            <button type="button" className="btn login__log-in" onClick={authLogin}>ВОЙТИ</button>
                        </div>
                        <div className="auth__form_right">
                            <NavLink to="#" className="auth__link">Forgot Password</NavLink>
                            <NavLink to="/auth/register" className="auth__link">Register</NavLink>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(
    mapStateToProps, {
        getLoginUser
    }
)
(Login);