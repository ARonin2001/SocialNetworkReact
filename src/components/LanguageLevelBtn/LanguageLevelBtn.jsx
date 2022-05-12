import React from 'react';

import './LanguageLevelBtn.css';

const LanguageLevelBtn = ({ language, level, classes="" }) => {
    return (
        <div className="user-lng__language language__container">
            <div className={`language language__study ${classes}`}>
                {language}
            </div>
            <div className="language language__levels">
                <span className="language__level"></span>
                <span className="language__level"></span>
                <span className="language__level language__level_active"></span>
            </div>
        </div>
    );
};

export default LanguageLevelBtn;