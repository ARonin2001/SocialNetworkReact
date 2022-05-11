import React from 'react';
import Errors from '../Errors/Errors';

import './Select.css';

const Select = ({ title, values, selectId, errors, name, ...props }) => {
    return (
        <div className="select__container">
            <label className="select__label" htmlFor={selectId}>{title}</label>
            <select className="select" id={selectId} name={name} onChange={props.change}>
                <option className="select__header" value={title} disabled selected="selected">{title}</option>
                {
                    values.map(value => {
                        return <option className="select__value" value={value}>{value}</option>
                    })
                }
                {errors[name] ? <Errors error={errors[name]} /> : null}
            </select>
        </div>

    );
};

export default Select;