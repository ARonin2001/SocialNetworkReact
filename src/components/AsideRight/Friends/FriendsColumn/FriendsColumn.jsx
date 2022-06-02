import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../assets/img/avaDefault.png';
import './FriendsColumn.css';

const FriendsColumn = (props) => {

    let avaImg = props.ava ? "http://localhost:3000" + props.ava : avaDefault;

    return (
        <div className="friends__column">
            <NavLink to={`profile/${props.id}`} className="friends__link">
                <div className="friends__ava">
                    <picture>
                        <img src={avaImg} alt="friends ava img" className="friends__img" />
                    </picture>
                </div>
                <div className="friends__name">{props.name}</div>
            </NavLink>
        </div>
    );
};

export default FriendsColumn;