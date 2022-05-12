import React from 'react';

import './ProfileLanguages.css';
import LanguageBtn from './../../../LanguageBtn/LanguageBtn';

const ProfileLanguages = ({languages}) => {
    return (
        <div className="profile__languages_top">
            {
                languages.map(language => {
                    return <LanguageBtn key={language.id} language={language.lng} classes={"profile__language"} />
                })
            }
        </div>
    );
};

export default ProfileLanguages;