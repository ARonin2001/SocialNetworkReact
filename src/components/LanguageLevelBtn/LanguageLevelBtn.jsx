import { faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import LanguageBtn from '../LanguageBtn/LanguageBtn';

import './LanguageLevelBtn.css';

const LanguageLevelBtn = ({ language, level = 1, classes = "", ...props }) => {
    let [isActiveLevel, setActiveLevel] = useState(false);
    let [isEdit, setEdit] = useState(false);

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

    const editLevel = (lngId) => {
        props.editLevel(lngId);
    }

    return (
        <div className={`user-lng__language language-level language__container ${isActiveLevel ? "active" : ""}`}
            onClick={toggleActiveLevel} 
            onMouseOver={() => setEdit(true)} 
            onMouseOut={() => setEdit(false)}>
            
            <LanguageBtn language={language} classes={'language__study'} 
                languageId={props.languageId}
                method={props.method}
                typeLng={props.typeLng} />

            <div className="language language__levels">
                {
                    isEdit &&
                        <div className='language-level_edit' onClick={() => editLevel(props.languageId)}>
                            <FontAwesomeIcon className='language-level_edit-icon' icon={faMarker} />
                        </div>
                }
                {
                    reverseLanguagesLevel
                }

            </div>
        </div>
    );
};

export default LanguageLevelBtn;