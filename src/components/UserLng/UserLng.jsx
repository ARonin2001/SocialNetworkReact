import React, { useState } from "react";

import UserLanguages from "./UserLanguages/UserLanguages";

import AddingLanguageContainer from '../UserLng/AddingLanguage/AddingLanguageContainer';
import './UserLng.css';
import withPageDimming from './../HOC/withPageDimming/withPageDimming';
import MessageQuestion from '../Messages/MessageQuestion/MessageQuestion';
import MessageAnwser from './../Messages/MessageAnwser/MessageAnwser';
import EditLanguage from "./EditLanguage/EditLanguage";

const UserLng = (props) => {

    let [typeLng, setTypeLng] = useState(null);
    let [isLevel, setLevel] = useState(false);
    let [lngId, setLngId] = useState(null);
    let [isAddLng, setIsAddLng] = useState(false);
    let [isMessageQuestion, setMessageQuestion] = useState(false);
    let [isEditLevel, setEditLevel] = useState(false);

    const openAddLanguage = (typeLng, level) => {
        setLevel(level);
        setIsAddLng(true);
        setTypeLng(typeLng);
    }
    const closeAddLanguages = () => setIsAddLng(false);

    // MessageQuestion
    const openMessageQuestion = (typeLng, lngId) => {
        setMessageQuestion(true);
        setTypeLng(typeLng);
        setLngId(lngId);
    }
    const closeMessageQuestion = () => setMessageQuestion(false);
    const getResponseAndCloseMsgQuestion = (response) => {
        closeMessageQuestion();
        props.getResponse(response, typeLng, lngId);
    }

    // edit language
    const openEditLevel = (lngId) => {
        setLngId(lngId);
        setEditLevel(true);
    }
    const closeEditLevel = () => setEditLevel(false);
    
    const editLevel = (level) => {
        setLevel(level);
        props.editLevel(lngId, level);
        setEditLevel(false);
    }

    const AddingLanguageWithPageDimming = withPageDimming(AddingLanguageContainer, closeAddLanguages);
    const MessageQestionWithPageDimming = withPageDimming(MessageQuestion, closeMessageQuestion);
    const MessageAnswerWithPageDimming = withPageDimming(MessageAnwser, props.closeMessageAnswer);
    const EditLanguageWithPageDimming = withPageDimming(EditLanguage, closeEditLevel);

    return (
        <div className="user-lng block">
            {
                isAddLng &&
                <AddingLanguageWithPageDimming typeLng={typeLng} isLevel={isLevel} />
            }
            {
                isMessageQuestion &&
                    <MessageQestionWithPageDimming title={"Delete language"}
                        question={"Do you really want to delete your language?"}
                        getResponse={getResponseAndCloseMsgQuestion}
                    />
            }
            {
                isEditLevel &&
                    <EditLanguageWithPageDimming 
                        title={"Change level language"} 
                        method={editLevel} />
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
                    openMessageQuestion={openMessageQuestion}
                    editLevel={openEditLevel} />
            </div>
        </div>
    );
};

export default UserLng;