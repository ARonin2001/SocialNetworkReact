import React from "react";

import avaDefault from '../../assets/img/avaDefault.png';
import './AvatarImg.css';

const AvatarImg = ({ avaIMG }) => {
    const host = window.origin;

    const avaImg = avaIMG ? host + avaIMG : avaDefault;

    return (
        <div className="avatar">
            <img className="avatar__img" src={avaImg} alt="ava img" />
        </div>
    );
};

export default AvatarImg;