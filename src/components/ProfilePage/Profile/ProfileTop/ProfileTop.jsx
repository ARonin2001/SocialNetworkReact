import React from 'react';

import ProfileLanguages from '../ProfileLanguages/ProfileLanguages';

import './ProfileTop.css';

const ProfileTop = (props) => {
    const languages = props.languages;
    let allLanguages = [...languages.native, ...languages.fluent, ...languages.learning];
    let sameLanguages = [];
    // убираем дубликаты языков
    allLanguages = allLanguages.filter(item => {
        if(!sameLanguages.includes(item.name)) {
            sameLanguages.push(item.name);
            return item;
        }
    });

    return (
        <div className="profile__top">
            <div className="profile__languages">
                <ProfileLanguages languages={allLanguages} />

                <div className="profile__languages_bottom">
                    <button className="profile__languages-more" onClick={props.openLanguagesBlock}>Подробнее...</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;