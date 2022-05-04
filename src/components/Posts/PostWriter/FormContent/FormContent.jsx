import React from "react";

import './FormContent.css';

const FormContent = (props) => {
    return (
        <div class="form-post__content-container">
            <div class="form-post__content" contenteditable="true" maxlength="700">
                <span class="form-post__placeholder">Just write any thing...</span>
            </div>
        </div>
    );
};

export default FormContent;