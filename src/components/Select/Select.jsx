import React from 'react';

import './Select.css';

const Select = ({ title, values, selectId }) => {
    return (
        <div className="select__container">
            <label className="select__label" for={selectId}>{title}</label>
            <select className="select" id={selectId}>
                <option className="select__header" value="Country" disabled>{title}</option>
                {
                    values.map(value => {
                        return <option className="select__value" value={value}>{value}</option>
                    })
                }
            </select>
        </div>

    );
};

export default Select;