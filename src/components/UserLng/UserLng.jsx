import React, { useState } from "react";

import UserLanguages from "./UserLanguages/UserLanguages";

import AddingLanguageContainer from '../UserLng/AddingLanguage/AddingLanguageContainer';
import './UserLng.css';
import withPageDimming from './../HOC/withPageDimming/withPageDimming';
import MessageQuestion from '../Messages/MessageQuestion/MessageQuestion';
import MessageAnwser from './../Messages/MessageAnwser/MessageAnwser';

const UserLng = (props) => {

    // let [typeLng, setTypeLng] = useState(null);
    let [isLevel, setLevel] = useState(false);
    // let [lngId, setLngId] = useState(null);
    let [isAddLng, setIsAddLng] = useState(false);
    let [isMessageQuestion, setMessageQuestion] = useState(false);

    const openAddLanguage = (typeLng, level) => {
        props.setTypeLng(typeLng);
        setLevel(level);
        setIsAddLng(true);
    }
    const closeAddLanguages = () => setIsAddLng(false);

    // MessageQuestion
    const openMessageQuestion = (typeLng, lngId) => {
        props.setTypeLng(typeLng);
        props.setLngId(lngId);
        setMessageQuestion(true);
    }
    const closeMessageQuestion = () => setMessageQuestion(false);
    const getResponseAndCloseMsgQuestion = (response) => {
        props.getResponse(response);
        closeMessageQuestion();
    }

    const AddingLanguageWithPageDimming = withPageDimming(AddingLanguageContainer, closeAddLanguages);
    const MessageQestionWithPageDimming = withPageDimming(MessageQuestion, closeMessageQuestion);
    const MessageAnswerWithPageDimming = withPageDimming(MessageAnwser, props.closeMessageAnswer);

    return (
        <div className="user-lng block">
            {
                isAddLng &&
                <AddingLanguageWithPageDimming typeLng={props.typeLng} isLevel={isLevel} />
            }
            {
                isMessageQuestion &&
                    <MessageQestionWithPageDimming title={"Delete language"}
                        question={"Do you really want to delete your language?"}
                        getResponse={getResponseAndCloseMsgQuestion}
                    />
            }
            {
                props.answer && 
                    <MessageAnswerWithPageDimming title={"Delete language"}
                        answer={props.answer} />
                
            }
            <div className="user-lng__container">
                <div className="user-lng__header">
                    <h2 className="user-lng__title title">
                        Languages
                    </h2>
                </div>

                <div className="line"></div>
                {/* items */}
                <UserLanguages languages={props.languages}
                    openAddLanguage={openAddLanguage}
                    openMessageQuestion={openMessageQuestion} />
            </div>
        </div>
    );
};

export default UserLng;