import React from 'react';

import './ProfileLanguages.css';
import LanguageBtn from './../../../LanguageBtn/LanguageBtn';

const ProfileLanguages = ({languages}) => {
    return (
        <div className="profile__languages_top">
            {
                languages.map(language => {
                    return <LanguageBtn key={language._id} language={language.name} classes={"profile__language"} />
                })
            }
        </div>
    );
};

export default ProfileLanguages;