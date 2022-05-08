import React from "react";

import './RadioCheckButton.css';

const RadioCheckButton = ({type, name, ID, value, ...props}) => {
    return (
        <div className="radio__container">
            <input type={type} name={name} className="radio__input" id={ID} value={value} />
            <label for={ID} className="radio__label" {...props}>
                {value}
            </label>
        </div>
    );
};

export default RadioCheckButton;