import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './Ava.css';

const Ava = ({avaIMG}) => {
    return (
        <div className="ava">
            <img src={avaIMG} alt="ava" className="ava-img" />
            <div className="ava_change">
                <FontAwesomeIcon icon={faCameraRotate} className={"ava-icon"}/>
            </div>
        </div>
            
    );
};

export default Ava;