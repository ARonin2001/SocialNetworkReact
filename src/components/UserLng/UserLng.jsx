import React from "react";

import UserLanguages from "./UserLanguages/UserLanguages";

import './UserLng.css';

const UserLng = (props) => {

    return (
        <div className="user-lng block">
            <div className="user-lng__container">
                <div className="user-lng__header">
                    <h2 className="user-lng__title title">
                        Languages
                    </h2>
                </div>

                <div className="line"></div>
                {/* items */}
                <UserLanguages languages={props.languages}
                    openAddLanguage={props.openAddLanguage} />
            </div>
        </div>
    );
};

export default UserLng;