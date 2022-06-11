import React, { useEffect } from "react";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import DialogsUser from "./DialogsUser/DialogsUser";

import './MessageDialogs.css';

const MessageDialogs = (props) => {
    useEffect(() => {
        props.setUsersByMessages(props.userId);
    }, []);

    return (
        <div className="messages__dialogs dialogs">
            <div className="dialogs__container">
                <DialogsHeader />
                <div className="dialogs__users">
                    {
                        props.users.map(user => {
                            return (
                                <DialogsUser id={user._id} key={user._id} ava={user.img.ava} 
                                    name={user.aboutMe.name}
                                    lastName={user.aboutMe.lastName} 
                                    selectCompanionId={props.selectCompanionId}
                                    companionId={props.companionId} />
                            )
                        })
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default MessageDialogs;