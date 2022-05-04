import React from "react";

import './Login.css';

const Login = (props) => {
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
                            <input type="text" class="login__input" placeholder="Username" />
                        </div>
                        <div class="login__input-container">
                            <input type="password" class="login__input" placeholder="Password" />
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
                            <button type="button" class="btn login__log-in">ВОЙТИ</button>
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

export default Login;