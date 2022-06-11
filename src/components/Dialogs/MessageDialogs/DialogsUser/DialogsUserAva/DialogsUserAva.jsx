import React from "react";

import avaDefault from '../../../../../assets/img/avaDefault.png';

import './DialogsUserAva.css';

const DialogsUserAva = ({ava}) => {
    const avaImg = ava ? window.origin + ava : avaDefault;

    return (
        <div className="d-user__ava">
            <img src={avaImg} alt="ava" className="d-user__img" />
        </div>
    );
};

export default DialogsUserAva;