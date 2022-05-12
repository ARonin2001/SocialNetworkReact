import React, {useState} from 'react';

import ProfileLanguages from '../ProfileLanguages/ProfileLanguages';

import './ProfileTop.css';

const ProfileTop = (props) => {
    return (
        <div className="profile__top">
            <div className="profile__languages">
                <ProfileLanguages languages={[{ id: 1, lng: "English" }]} />

                <div className="profile__languages_bottom">
                    <button className="profile__languages-more" onClick={props.openLanguagesBlock}>Подробнее...</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;