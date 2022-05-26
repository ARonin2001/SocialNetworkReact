import React from "react";

import avaDefault from '../../assets/img/avaDefault.png';
import './AvatarImg.css';

const AvatarImg = ({ avaIMG }) => {
    const host = window.origin;

    // host 3000 (server host)
    // Это временное решение
    let hostServer = host;
    hostServer = hostServer.substr(0, hostServer.length-4);
    hostServer += "3000";

    const avaImg = avaIMG ? hostServer + avaIMG : avaDefault;

    return (
        <div className="avatar">
            <img className="avatar__img" src={avaImg} alt="ava img" />
        </div>
    );
};

export default AvatarImg;