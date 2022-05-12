import React, {useState} from 'react';

// default IMG
import backDefault from '../../../assets/img/avaBackground.jpg';

//css
import './Profile.css';

// components
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileTop from './ProfileTop/ProfileTop';
import ProfileBottom from './ProfileBottom/ProfileBottom';
import UserLng from '../../UserLng/UserLng';

const Profile = (props) => {
    let [isLanguagesBlock, setLanguagesBlock] = useState(false);

    const openLanguagesBlock = () => {
        setLanguagesBlock(true);
    }

    const closeLanguagesBlock = () => {
        setLanguagesBlock(false);
    }

    return (
        <div className="profile main__profile">
            <div className="profile__container">
                <div className="background__coverage" onClick={closeLanguagesBlock}></div>
                <ProfileTop openLanguagesBlock={openLanguagesBlock} />
                <ProfileBottom />

                {/* user languages */}
                {
                    isLanguagesBlock && <UserLng />
                }
            </div>

            <ProfileBackground backgroundIMG={backDefault} />
        </div>
    );
};

export default Profile;