import React from "react";
import Errors from "../Errors/Errors";

import './Input.css';

const Input = ({ title, name, type, errors, value,  ...props }) => {
    
    return (
        <div className="input__container">
            <label className="input__label" htmlFor={name}>{title}</label>
            <input id={name} type={type} name={name} className="input" placeholder={title}
                value={value}
                {...props} />
            {errors[name] ? <Errors error={errors[name]} /> : null}
        </div>
    );
};

export default Input;