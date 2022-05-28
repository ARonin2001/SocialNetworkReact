import React from 'react';

import './MessageAnwser.css';

const MessageAnwser = ({title, answer, method}) => {
    return (
        <div className="msg-a block">
            <div className="msg-a__container p-13">
                <h3 className="msg-a__title title">{title}</h3>
                <div className="line"></div>

                <div className="msg-a__answer">
                    {answer}
                </div>

                <button className='msg-a__btn btn' onClick={method}>OK</button>
            </div>
        </div>
    );
};

export default MessageAnwser;