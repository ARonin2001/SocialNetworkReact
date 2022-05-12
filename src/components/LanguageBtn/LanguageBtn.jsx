import React from 'react';

import './LanguageBtn.css';

const LanguageBtn = ({language, classes}) => {
    return (
        <div className={`language ${classes}`} >
            {language}
        </div>
    );
};

export default LanguageBtn;