import React from "react";

import User from "../User/User";
import ProfileBtn from "../ProfileBtn/ProfileBtn";

// icons
import { faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons';

import './ProfileBottom.css';

const ProfileBottom = (props) => {
    return (
        <div className="profile__bottom">
            <User
                avaIMG={props.avaImg}
                name={props.name}
                lastName={props.lastName}
                status={"It’s my very beautifule status. Eee man. I’m a React developer. I’m a best of the best React developer yes."}
                openStatusEdit={props.openStatusEdit} 
                isStatusEdit={props.isStatusEdit}
                showUploadAva={props.showUploadAva} />

            <div className="profile__buttons">
                <ProfileBtn btnText={"Add to friend"} icon={faUserPlus} action={"add"} />
                <ProfileBtn btnText={"delete friend"} icon={faUserMinus} action={"delete"} />
                <ProfileBtn btnText={"Upload back img"} icon={faCameraRotate} />
            </div>
        </div>
    );
};

export default ProfileBottom;