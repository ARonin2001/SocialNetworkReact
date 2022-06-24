import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";

import './SendingMessageForm.css';

const SendingMessageForm = (props) => {
    let [message, setMessage] = useState('');

    const sendMessage = async () => {
        if(message) {
            await props.addNewMessage(props.userId, props.companionId, message, "me");
            setMessage('');
            props.setAddMsg(true);
        }
    };

    const textAreaAutoHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = (e.target.scrollHeight - 20) + 'px';
    }

    const writeMessage = (e) => {
        setMessage(e.target.value);
        textAreaAutoHeight(e);
    }

    return (
        <div className="s-message__form" id="s-message__form">
            {/* <div className="s-message__input-img">
                <input type="file" name="post-image" id="s-message__input" className="s-message__input" accept=".jpg, .jpeg, .png" />
                <label className="s-message__form-label" htmlFor="s-message__input">
                    <FontAwesomeIcon icon={faImage} />
                </label>
            </div> */}
            <div className="s-message__writer-input">
                <textarea type="text" className="s-message__writer" id="s-message__writer" 
                    aria-multiline="true" onChange={writeMessage}
                    value={message} placeholder="Написать сообщение..." 
                    rows={1} ></textarea> 
            </div>
            <button className="s-message_send-message" onClick={sendMessage}>
                <FontAwesomeIcon className="s-message__btn-icon" icon={faPaperPlane} />
            </button>
        </div>
    );
};

export default SendingMessageForm;