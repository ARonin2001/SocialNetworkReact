import React from "react";

import './DialogsUserContent.css';

const DialogsUserContent = ({name, lastName}) => {
    const fullName = `${name} ${lastName}`;

    return (
        <div className="d-user__content">
            <div className="d-user__name">
                {fullName}
            </div>
            <span className="d-user__time-last-message">
                19:46
            </span>
        </div>
    );
};

export default DialogsUserContent;