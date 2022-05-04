import React from "react";
import {useState} from 'react';
import { connect } from "react-redux";
import './Login.css';
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
        <div class="block login">
            <div class="login__container">
                <h2 class="login__title title">
                    Авторизация
                </h2>
                <div class="line"></div>
                <form action="GET" class="login__form" id="login__form">
                    <div class="login__inputs">
                        <div class="login__input-container">
                            <input type="text" class="login__input" placeholder="Username" onChange={changeLogin} value={login} />
                        </div>
                        <div class="login__input-container">
                            <input type="password" class="login__input" placeholder="Password" onChange={changePassword} value={password} />
                        </div>
                    </div>
                    <div class="login__form_bottom">
                        <div class="login__form_left">
                            <div class="login__checkbox-container">
                                <input type="checkbox" name="remeber-me" class="login_remember-me" id="login_remember-me" />
                                <label for="login_remember-me" class="login__label_remember-me">
                                    Запомнить меня
                                </label>
                            </div>
                            <button type="button" class="btn login__log-in" onClick={authLogin}>ВОЙТИ</button>
                        </div>
                        <div class="login__form_right">
                            <a href="#" class="login__link">Forgot Password</a>
                            <a href="#" class="login__link">Register</a>
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