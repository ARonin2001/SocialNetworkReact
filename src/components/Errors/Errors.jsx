import React from 'react';

import './Errors.css';

const Errors = ({error}) => {
    return (
        <span className='error'>{error}</span>
    );
};

export default Errors;