import React from "react";
import Errors from "../Errors/Errors";

import './RadioCheckButton.css';

const RadioCheckButton = ({ type, name, ID, title, errors, ...props }) => {
    return (
        <div className="radio__container">
            <input type={type} name={name} className="radio__input" id={ID} value={title} onChange={props.change} />
            <label htmlFor={ID} className="radio__label">
                {title}
            </label>
            {errors[name] ? <Errors error={errors[name]} /> : null}
        </div>
    );
};

export default RadioCheckButton;