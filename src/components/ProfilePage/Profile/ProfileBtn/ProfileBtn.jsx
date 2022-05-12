import React from "react";

import './ProfileBtn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileBtn = ({icon, btnText, action, clickMethod=null}) => {
    const getActionClass = (action) => {
        if(action === "add")
            return "add-friend";
        else if (action === "delete")
            return "delete-friend";

        return null;
    }

    return (
        <div className="profile__btn-container" onClick={clickMethod}>
            <button className={`profile__btn ${getActionClass(action)}`}>
                <FontAwesomeIcon icon={icon} className={"profile__btn-icon"}/>
                <div className="profile__btn-text">{btnText}</div>
            </button>
        </div>
    );
};

export default ProfileBtn;