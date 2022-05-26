import React from "react";

import './FormContent.css';

const FormContent = (props) => {
    return (
        <div className="form-post__content-container">
            <div className="form-post__content" contentEditable="true" maxLength="700">
                <span className="form-post__placeholder">Just write any thing...</span>
            </div>
        </div>
    );
};

export default FormContent;