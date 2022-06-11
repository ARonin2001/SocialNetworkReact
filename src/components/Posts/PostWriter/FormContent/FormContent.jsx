import React from "react";

import './FormContent.css';

const FormContent = (props) => {
    return (
        <div className="form-post__content-container">
            <div className="form-post__content" maxLength="700">
                <span className="form-post__placeholder">Just write anything...</span>
            </div>
        </div>
    );
};

export default FormContent;