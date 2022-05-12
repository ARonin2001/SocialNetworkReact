import React from 'react';

// default IMG
import backDefault from '../../../assets/img/avaBackground.jpg';


//css
import './Profile.css';

// components
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileTop from './ProfileTop/ProfileTop';
import ProfileBottom from './ProfileBottom/ProfileBottom';

const Profile = (props) => {
    return (
        <div className="profile main__profile">
            <div className="profile__container">
                <ProfileTop />
                <ProfileBottom />
            </div>

            <ProfileBackground backgroundIMG={backDefault} />
        </div>
    );
};

export default Profile;