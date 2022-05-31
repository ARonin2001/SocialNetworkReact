import React from 'react';

import './MessageQuestion.css';

const MessageQuestion = ({ title, question, getResponse, error = null }) => {
    return (
        <div className="msg-q block">
            <div className="msg-q__container p-13">
                <h3 className="msg-q_title title">{title}</h3>

                <div className="line"></div>
                <div className="msg-q__question">
                    {question}
                </div>
                {
                    error &&
                        <span className='msg-q__error'>{error}</span>
                }
                <div className="msg-q__buttons">
                    <button className="msg-q__btn-yes btn" onClick={() => getResponse(true)} >YES</button>
                    <button className="msg-q__btn-no btn" onClick={() => getResponse(false)} >NO</button>
                </div>
            </div>
        </div>
    );
};

export default MessageQuestion;