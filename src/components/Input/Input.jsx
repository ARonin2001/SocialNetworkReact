import React from "react";
import Errors from "../Errors/Errors";

import './Input.css';

const Input = ({ title, name, type, inputId, errors, value,  ...props }) => {
    
    return (
        <div className="input__container">
            {value ? value : "nothing"}
            <label className="input__label" htmlFor={inputId} >{title}</label>
            <input id={inputId} type={type} name={name} className="input" placeholder={title}
                value={value}
                {...props} />
            {errors[name] ? <Errors error={errors[name]} /> : null}
        </div>
    );
};

export default Input;