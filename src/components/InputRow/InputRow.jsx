import React from 'react';
import Input from '../Input/Input';

import './InputRow.css';

const InputRow = ({inputs, change, errors}) => {
    return (
        <div className="inputs inputs__row">
            {
                inputs.map(input => {
                    return (
                        <Input key={input.id} title={input.title} type={input.type} name={input.name} onChange={change} value={input.value} errors={errors} />
                    )
                })
            }

        </div>
    )
};

export default InputRow;