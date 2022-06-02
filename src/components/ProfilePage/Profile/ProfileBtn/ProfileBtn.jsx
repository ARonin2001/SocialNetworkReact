import React from "react";
import { useParams } from 'react-router-dom';

import './ProfileBtn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileBtn = ({icon, btnText, action, clickMethod}) => {
    const params = useParams();
    const profileId = params.id;
    
    const getActionClass = (action) => {
        if(action === "add")
            return "add-friend";
        else if (action === "delete")
            return "delete-friend";

        return null;
    }

    return (
        <div className="profile__btn-container" onClick={() => clickMethod(profileId)}>
            <button className={`profile__btn ${getActionClass(action)}`}>
                <FontAwesomeIcon icon={icon} className={"profile__btn-icon"}/>
                <div className="profile__btn-text">{btnText}</div>
            </button>
        </div>
    );
};

export default ProfileBtn;