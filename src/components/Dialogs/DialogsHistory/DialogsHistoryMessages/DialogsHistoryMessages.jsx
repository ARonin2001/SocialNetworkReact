import React, { useEffect, useRef } from "react";

import DialogsHostiryMessageMe from "./DialogsHostiryMessageMe/DialogsHostiryMessageMe";
import DialogsHostiryMessageFriend from "./DialogsHostiryMessageFriend/DialogsHostiryMessageFriend";

import './DialogsHistoryMessages.css';

const DialogsHistoryMessages = (props) => {
    const messagesRef = useRef(null);
    
    useEffect(() => {
        messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }, [props.messages]);

    return (
        <div className="d-history__content" ref={messagesRef}>
            <div className="d-history__messages" >
                {
                    props.companionId &&
                    props.messages.map(msg => {
                        if (msg.sender === "me") {
                            return <DialogsHostiryMessageMe
                                        key={msg._id}
                                        userId={props.userId}
                                        name={props.authName}
                                        message={msg.message}
                                        ava={props.authAva}
                                    />

                        } else {
                            return <DialogsHostiryMessageFriend key={msg._id}
                                        userId={props.companion._id}
                                        name={props.companion.aboutMe.name}
                                        message={msg.message}
                                        ava={props.companion.img.ava} 
                                    />
                        }
                    })
                }

            </div>
        </div>
    );
};

export default DialogsHistoryMessages;