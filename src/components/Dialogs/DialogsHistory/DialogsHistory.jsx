import React, {useEffect, useState} from "react";
import socket from '../../../socket';

import './DialogsHistory.css';
import DialogsHistoryHeader from "./DialogsHistoryHeader/DialogsHistoryHeader";
import DialogsHistoryMessages from "./DialogsHistoryMessages/DialogsHistoryMessages";
import SendingMessage from "./SendingMessage/SendingMessage";

const DialogsHistory = (props) => {
    let user = props.selectedUser;
    let [isAddMsg, setAddMsg] = useState(false);

    // useEffect(() => {
    //     socket.on('MSG:ADD', (newMsg) => props.addMessage(newMsg) );
    // }, []);

    useEffect(() => {
        socket.on('MSG:ADD', (newMsg) => {
            // return props.addNewMessage(props.companionId, props.userId, newMsg, "companion");
            return props.addMessage(newMsg);
        });
    }, []);

    useEffect(() => {
        if(isAddMsg) {
            let newMessage = {...props.messages.at(-1)};
            newMessage.roomId = props.roomId;

            socket.emit('MSG:ADD', newMessage);
            setAddMsg(false);
        }
            
    }, [isAddMsg]);

    return (
        <div className="messages__dialog-history d-history">
            <div className="d-history__container">
                {
                    props.companionId &&
                        <DialogsHistoryHeader 
                            userId={props.companionId}
                            ava={user.img.ava} 
                            name={user.aboutMe.name} lastName={user.aboutMe.lastName} />
                }
                <DialogsHistoryMessages 
                    userId={props.userId}
                    companionId={props.companionId}
                    messages={props.messages}
                    authName={props.authName}
                    authAva={props.authAva}
                    companion={props.companion} />
                <SendingMessage 
                    userId={props.userId}
                    companionId={props.companionId}
                    addNewMessage={props.addNewMessage}
                    setAddMsg={setAddMsg} />
            </div>
        </div>
    );
};

export default DialogsHistory;