import React from "react";
import {useState} from 'react';
import { connect } from "react-redux";
import '../Auth.css';
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
                    Авторизация
                </h2>
                <div className="line"></div>
                <form action="GET" className="auth__form" id="auth__form">
                    <div className="auth__inputs">
                        <div className="auth__input-container">
                            <input type="text" className="auth__input" placeholder="Username" onChange={changeLogin} value={login} />
                        </div>
                        <div className="auth__input-container">
                            <input type="password" className="auth__input" placeholder="Password" onChange={changePassword} value={password} />
                        </div>
                    </div>
                    <div className="auth__form_bottom">
                        <div className="auth__form_left">
                            <div className="auth__checkbox-container">
                                <input type="checkbox" name="remeber-me" className="auth_remember-me" id="auth_remember-me" />
                                <label for="auth_remember-me" className="auth__label_remember-me">
                                    Запомнить меня
                                </label>
                            </div>
                            <button type="button" className="btn login__log-in" onClick={authLogin}>ВОЙТИ</button>
                        </div>
                        <div className="auth__form_right">
                            <a href="#" className="auth__link">Forgot Password</a>
                            <a href="#" className="auth__link">Register</a>
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