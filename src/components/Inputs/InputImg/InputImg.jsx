import React from 'react';

import './InputImg.css';

const InputImg = ({labelTitle, name, ...props}) => {
    const error  = props.error ? props.error : "";

    return (
        <div className="input-container">
            <label className="file-label" htmlFor="input-file">{labelTitle}</label>
            <input type="file" name={name} className="input-file" id="input-file" accept=".png, .jpg, .jpeg" {...props} />
            {
                error && <span className="file-error">error</span>
            }
        </div>
    );
};

export default InputImg;