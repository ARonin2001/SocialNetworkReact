import React, { useState } from 'react';

import './LanguageBtn.css';

const LanguageBtn = ({language, classes, deleteMethod}) => {
    let [isDelete, setDelete] = useState(false);

    return (
        <div className={`language ${classes}`} onMouseOver={() => setDelete(true)} 
            onMouseOut={() => setDelete(false)} >
            {isDelete && <div className='language_delete' onClick={deleteMethod}></div>}
            {language}
        </div>
    );
};

export default LanguageBtn;