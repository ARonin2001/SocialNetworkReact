import React from 'react';

import './ProfileBackground.css';

const ProfileBackground = ({backgroundIMG}) => {
    return (
        <div className="profile__back">
            <img src={backgroundIMG} alt="background" className="profile__back-img" />
        </div>
    );
};

export default ProfileBackground;