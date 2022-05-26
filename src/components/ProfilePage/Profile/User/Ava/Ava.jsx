import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import AvatarImg from "../../../../AvatarImg/AvatarImg";

import './Ava.css';

const Ava = ({avaIMG, showUploadAva}) => {
    return (
        <div className="ava" onClick={showUploadAva}>
            <AvatarImg avaIMG={avaIMG}/>
            <div className="ava_change">
                <FontAwesomeIcon icon={faCameraRotate} className={"ava-icon"}/>
            </div>
        </div>
    );
};

export default Ava;