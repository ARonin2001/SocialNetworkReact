import React, { useEffect, useState } from 'react';
import socket from '../../socket';

import './Dialogs.css';
import DialogsHistory from './DialogsHistory/DialogsHistory';
import MessageDialogs from './MessageDialogs/MessageDialogs';

const Dialogs = (props) => {

    let [companionId, setCompanionId] = useState(null);
    let [selectedUser, setUser] = useState(null);

    const setSelectedUser = (id) => {
        let user = props.users.find(u => u._id === id);
        setUser(user);
    }

    const selectCompanionId = (id) => {
        setCompanionId(id);
        setSelectedUser(id);
    }

    useEffect(() => {
        if(companionId) {
            (async() => {
                props.setUserChat(companionId, props.userId);
            })();
        }
    }, [companionId]);

    useEffect(() => {
        if(companionId && props.chat.roomId) {
            socket.emit('MSG:JOIN', props.chat.roomId);
        }
    }, [props.chat.roomId]);

    useEffect(() => {
        props.showDialogs();

        return () => props.hideDialogs();
    }, []);

    return (
        <div className="messages block">    
            <div className="messages__container">
                <MessageDialogs users={props.users} setUsersByMessages={props.setUsersByMessages} 
                    userId={props.userId} 
                    companionId={companionId}
                    selectCompanionId={selectCompanionId} />
                <DialogsHistory companionId={companionId} 
                    userId={props.userId}
                    selectedUser={selectedUser}
                    messages={props.chat.messages}
                    roomId={props.chat.roomId}

                    authName={props.authName}
                    authAva={props.authAva}
                    companion={selectedUser} 
                    addNewMessage={props.addNewMessage}
                    addMessage={props.addMessage} />
            </div>
        </div>
    );
};

export default Dialogs;