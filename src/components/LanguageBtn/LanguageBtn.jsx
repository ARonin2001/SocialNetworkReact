import React, { useState } from 'react';

import './LanguageBtn.css';

const LanguageBtn = ({language, classes, method, ...props}) => {
    let [isDelete, setDelete] = useState(false);

    return (
        <div className={`language ${classes}`} onMouseOver={() => setDelete(true)} 
            onMouseOut={() => setDelete(false)} >
            {isDelete && <div className='language_delete' 
                onClick={() => method(props.typeLng, props.languageId)}></div>}
            {language}
        </div>
    );
};

export default LanguageBtn;