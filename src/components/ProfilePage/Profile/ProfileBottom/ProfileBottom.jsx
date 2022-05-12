import React from "react";

import User from "../User/User";
import ProfileBtn from "../ProfileBtn/ProfileBtn";

import avaDefault from '../../../../assets/img/avaDefault.png';

// icons
import { faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons';

import './ProfileBottom.css';

const ProfileBottom = (props) => {
    return (
        <div className="profile__bottom">
            <User
                avaIMG={avaDefault}
                name={"Mister Bin"}
                status={"It’s my very beautifule status. Eee man. I’m a React developer. I’m a best of the best React developer yes."} />

            <div className="profile__buttons">
                <ProfileBtn btnText={"Add to friend"} icon={faUserPlus} action={"add"} />
                <ProfileBtn btnText={"delete friend"} icon={faUserMinus} action={"delete"} />
                <ProfileBtn btnText={"Upload back img"} icon={faCameraRotate} />
            </div>
        </div>
    );
};

export default ProfileBottom;