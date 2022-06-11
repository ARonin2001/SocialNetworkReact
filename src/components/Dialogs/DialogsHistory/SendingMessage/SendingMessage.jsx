import React from "react";

import SendingMessageForm from "./SendingMessageForm/SendingMessageForm";

import './SendingMessage.css';

const SendingMessage = (props) => {
    return (
        <div className="d-history__send-message s-message">
            <div className="s-message__container">
                <SendingMessageForm 
                    userId={props.userId}
                    companionId={props.companionId}
                    addNewMessage={props.addNewMessage}
                    setAddMsg={props.setAddMsg} />
            </div>
        </div>
    );
};

export default SendingMessage;