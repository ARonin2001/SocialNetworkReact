import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../assets/img/avaDefault.png';
import './Ava.css';

const Ava = ({name}) => {
    return (
        <div className="user-mini__ava">
            <div className="user-mini__ava-img">
                <img src={avaDefault} alt="background japan" />
            </div>
            <NavLink to="#" className="user-mini__name title">{name}</NavLink>
        </div>
    );
};

export default Ava;