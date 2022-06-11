import React from "react";

import DialogsUserAva from './DialogsUserAva/DialogsUserAva';
import DialogsUserContent from "./DialogsUserContent/DialogsUserContent";
import './DialogsUser.css';

const DialogsUser = ({id, ava, name, lastName, companionId, selectCompanionId}) => {
    return (
        <div className={`dialogs__user d-user ${companionId === id ? 'active': null}`} onClick={() => selectCompanionId(id)}>
            <DialogsUserAva ava={ava}  />
            <DialogsUserContent name={name} lastName={lastName} />
        </div>
    );
};

export default DialogsUser;