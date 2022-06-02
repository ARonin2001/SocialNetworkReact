import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../assets/img/avaDefault.png';
import './Ava.css';

const Ava = (props) => {
    let fullName = `${props.name} ${props.lastName}`;

    let avaImg = props.ava ? "http://localhost:3000" + props.ava : avaDefault; 

    return (
        <div className="user-mini__ava">
            <NavLink to={`/profile/${props.userId}`} className="user-mini__ava-img">
                <img src={avaImg} alt="background japan" />
            </NavLink>
            <NavLink to={`/profile/${props.userId}`} className="user-mini__name title">{fullName}</NavLink>
        </div>
    );
};

export default Ava;