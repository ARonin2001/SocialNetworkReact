import React, { useState } from 'react';

import './LanguageLevelBtn.css';

const LanguageLevelBtn = ({ language, level = 1, classes = "" }) => {
    let [isActiveLevel, setActiveLevel] = useState(false);

    const toggleActiveLevel = () => {
        if (isActiveLevel)
            setActiveLevel(false);
        else
            setActiveLevel(true);
    }

    const languagesLevel = [
        <span className="language__level"></span>,
        <span className="language__level"></span>,
        <span className="language__level language__level_active"></span>
    ];

    // делаем зелёную полосу, если уровень языка совпал с индексом элемента и перевоарчиваем
    // чтобы отобразить уровни языков в правильном порядке 
    // (снизу вверх / от меньшего к большему)
    const reverseLanguagesLevel = languagesLevel.map((item, index) => {
        if(index < level)
            return <span className="language__level language__level_active"></span>

        return <span className="language__level"></span>
    }).reverse();

    return (
        <div className={`user-lng__language language__container ${isActiveLevel ? "active" : ""}`}
            onClick={toggleActiveLevel}>

            <div className={`language language__study ${classes}`}>
                {language}
            </div>
            <div className="language language__levels">
                {
                    reverseLanguagesLevel
                }
            </div>
        </div>
    );
};

export default LanguageLevelBtn;