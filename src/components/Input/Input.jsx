import React from "react";

import './Input.css';

const Input = ({title, name, type, inputId, ...props}) => {
    return (
        <div className="input__container">
            <label className="input__label" for={inputId}>{title}</label>
            <input id={inputId} type={type} name={name} className="input" placeholder={title} {...props} />
        </div>
    );
};

export default Input;