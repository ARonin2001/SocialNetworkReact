import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withPreloader from '../HOC/withPreloader/withPreloader';
import UserLng from './UserLng';
import { removeUserLanguage, editUserLanguageLevel } from './../../redux/reducers/profileReducer';
import { connect } from 'react-redux';

const UserLngContainer = (props) => {
    // delete language
    const deleteLanguage = (typeLng, lngId, profileId) => {
        if(lngId) {
            if(props.userId === profileId) {
                setPreloader(true);
                props.removeUserLanguage(typeLng, lngId, props.userId);
                setPreloader(false);
            }
        }
    }
    const editLevel = (lngId, level) => {
        if(lngId && level) {
            if(props.userId === profileId) {
                setPreloader(true);
                props.editUserLanguageLevel(lngId, level, props.userId);
                setPreloader(false);
            }
        }
    }

    const params = useParams();
    const profileId = params.id;

    let [typeLng, setTypeLng] = useState(null);
    let [lngId, setLngId] = useState(null);

    const setTypeLanguage = (typeLng) => setTypeLng(typeLng);
    const setLanguageId = (lngId) => setLngId(lngId); 

    let [answer, setAnswer] = useState(false);
    let [isPreloader, setPreloader] = useState(false);

    const setAnswerInQuestion = (response, typeLng, lngId) => {
        setTypeLanguage(typeLng);
        setLanguageId(lngId);
        setAnswer(response);
    } 
    const closeMessageAnswer = () => setAnswer(false);

    useEffect(() => {
        if(answer) {
            deleteLanguage(typeLng, lngId, profileId);
            setAnswer(false);
        }
    }, [answer]);

    const UserLngWithPreloader = withPreloader(UserLng);

    return (
        <>
            <UserLngWithPreloader isPreloader={isPreloader}
                languages={props.languages} 
                getResponse={setAnswerInQuestion} 
                typeLng={typeLng}
                lngId={lngId}
                closeMessageAnswer={closeMessageAnswer}
                setTypeLng={setTypeLanguage}
                setLngId={setLanguageId}
                deleteLanguage={deleteLanguage} 
                editLevel={editLevel} />
        </>
        
    )
};

const mapStateToProps = state => {
    return {
        userId: state.auth.id,
    }
}

export default connect(
    mapStateToProps,
    {removeUserLanguage, editUserLanguageLevel}
)
(UserLngContainer);