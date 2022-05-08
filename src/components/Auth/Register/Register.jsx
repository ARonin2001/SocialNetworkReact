import React from "react";
import Select from "../../Select/Select";
import Input from "../../Input/Input";

import '../Auth.css';
import { NavLink } from "react-router-dom";
import RadioButton from "../RadioCheckButton/RadioCheckButton";

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
                        <div className="auth__inputs auth__section-row">
                            <Input title={"Name"} type={"text"} name={"user-name"} inputId={"input__name"} />
                            <Input title={"Lastname"} type={"text"} name={"user-lastname"} inputId={"input__lastname"} />
                        </div>
                        {/* password (email) and login */}
                        <div className="auth__inputs auth__section-row">
                            <Input title={"Email"} type={"email"} name={"user-email"} inputId={"input__email"} />
                            <Input title={"Password"} type={"password"} name={"user-password"} inputId={"input__password"} />
                        </div>
                        {/* country and city */}
                        <div className="auth__selects auth__section-row">
                            <Select title="Country" values={["Japan", "Russia", "USA", "Korea"]} selectId={"select__country"}/>
                            <Select title="City" values={["Tokio", "Moskow", "Vashington", "Seul"]} selectId={"select__city"}/>
                        </div>
                        {/* date of birth */}
                        <div className="auth__date-time auth__section-row">
                            <Input title={"DateBirth"} type={"date"} name={"user-dateBirth"} inputId={"input__datebirth"} />
                        </div>
                        {/* gender */}
                        <div className="auth__ceckboxes">
                            <RadioButton type={"radio"} name={"gender"} value={"male"} ID={"radio-m"} />
                            <RadioButton type={"radio"} name={"gender"} value={"woman"} ID={"radio-w"} />
                        </div>
                        
                    </div>
                    
                    <div className="auth__form_bottom">
                        <div className="auth__form_left">
                            <button type="button" className="btn login__log-in">REGISTER</button>
                        </div>
                        <div className="auth__form_right">
                            <NavLink to="#" className="auth__link">Forgot Password</NavLink>
                            <NavLink to="/auth/login" className="auth__link">Login</NavLink>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;