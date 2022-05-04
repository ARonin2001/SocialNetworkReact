import React from "react";

import avaBackground from '../../../../assets/img/avaBackground.jpg';
import './AvaBack.css';

const AvaBack = (props) => {
    return (
        <div className="user-mini__top">
            <img src={avaBackground} className="user-mini__back-img" />
        </div>
    );
};

export default AvaBack;