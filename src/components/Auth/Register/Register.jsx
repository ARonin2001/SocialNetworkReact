import React from "react";

import '../Auth.css';

const Register = (props) => {
    return (
        <div className="block auth">
            <div className="auth__container">
                <h2 className="auth__title title">
                    Registration
                </h2>
                <div className="line"></div>
                <form action="GET" className="auth__form" id="auth__form">
                    <div className="auth__inputs-container"> 
                        {/* name and lastName */}
                        <div className="auth__inputs">
                            <div className="auth__input-container">
                                <input type="text" name="user-name" className="auth__input" placeholder="username"  />
                            </div>
                            <div className="auth__input-container">
                                <input type="text" name="user-lastname" className="auth__input" placeholder="lastname" />
                            </div>
                        </div>
                        {/* password (email) and login */}
                        <div className="auth__inputs">
                            <div className="auth__input-container">
                                <input type="email" name="user-mail" className="auth__input" placeholder="email"  />
                            </div>
                            <div className="auth__input-container">
                                <input type="password" name="user-password" className="auth__input" placeholder="password" />
                            </div>
                        </div>
                        <div className="auth__selects">
                            <div className="auth__select-container">
                                <select className="auth__select">
                                   <option value={"Country"}>Country</option> 
                                   <option value={"Japan"}>Japan</option> 
                                   <option value={"Russia"}>Russia</option> 
                                   <option value={"USA"}>USA</option> 
                                </select>
                            </div>
                        </div>
                        {/* gender */}
                        <div className="auth__ceckboxes">
                            <div className="auth__radio-container">
                                <input type="radio" name="gender" className="auth__input-radio" id="auth__input-radio-m" value={"male"} />
                                <label for="auth__input-radio-m" className="auth__label_radio">
                                    male
                                </label>
                            </div>
                            <div className="auth__radio-container">
                                <input type="radio" name="gender" className="auth__input-radio" id="auth__input-radio-w" value={"woman"}/>
                                <label for="auth__input-radio-w" className="auth__label_radio">
                                    woman
                                </label>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="auth__form_bottom">
                        <div className="auth__form_left">
                            <button type="button" className="btn login__log-in">REGISTER</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;