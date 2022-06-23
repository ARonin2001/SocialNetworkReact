import React, {useState} from "react";

import './FormContent.css';

const FormContent = ({content, setContent}) => {
    let [message, setMessage] = useState('');

    const textAreaAutoHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = (e.target.scrollHeight - 20) + 'px';
    }

    const writeMessage = (e) => {
        setContent(e.target.value);
        // setMessage(e.target.value);
        textAreaAutoHeight(e);
    }

    return (
        <div className="form-post__content-container">
            <div className="form-post__content" maxLength="700">
                {/* <input className="post-write__title title" name="post-content" placeholder="Just write something..." /> */}

                <div className="s-message__writer-input">
                    <textarea type="text" className="s-message__writer post-write__title title" id="s-message__writer" 
                        aria-multiline="true"
                        placeholder="Just write something..." 
                        rows={1}
                        onChange={writeMessage}
                        value={content}
                        ></textarea> 
                </div>

                {/* <span className="form-post__placeholder">Just write anything...</span> */}
            </div>
        </div>
    );
};

export default FormContent;