import React from 'react';
import Errors from '../Errors/Errors';

import './Select.css';

const Select = ({ title, values, name, errors = null, ...props }) => {
    return (
        <div className="select" tabIndex={"1"} >
            <div className="select__container">
                <input className="selectopt" name={name} type="radio" id={title} value={title} defaultChecked disabled/>
                <label htmlFor={title} className="option">{title}</label>
                {
                    values.map((item, key) => {
                        if(item.name !== null) {
                            return (
                                <div key={key} >
                                    <input className="selectopt" name={name} type="radio" id={item.name} value={item.name} defaultChecked onClick={props.change} />
                                    <label htmlFor={item.name} className="option">{item.name}</label>
                                </div>
                            )
                        }
                        
                    })
                }
                {errors[name] ? <Errors error={errors[name]} /> : null}
            </div>
        </div>
    );
};

export default Select;