import React from "react";
import { NavLink } from "react-router-dom";

import avaDefault from '../../../../assets/img/avaDefault.png';
import './FriendsColumn.css';

const FriendsColumn = (props) => {
    return (
        <div className="friends__column">
            <NavLink to="#" className="friends__link">
                <div className="friends__ava">
                    <picture>
                        <img src={avaDefault} alt="friends ava img" className="friends__img" />
                    </picture>
                </div>
                <div className="friends__name">Evgeniy...</div>
            </NavLink>
        </div>
    );
};

export default FriendsColumn;