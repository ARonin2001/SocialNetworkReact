import React from 'react'
import { connect } from 'react-redux';
import { setUsersByMessages, setUserChat, addNewMessage, addMessage } from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import { Navigate } from 'react-router-dom';

const DialogsContainer = (props) => {
    if(!props.isAuth)
        return <Navigate to={"/auth/login"} />

    return (
    <Dialogs userId={props.userId} 
        showDialogs={props.showDialogs} hideDialogs={props.hideDialogs} 
        users={props.users} 
        setUsersByMessages={props.setUsersByMessages}

        setUserChat={props.setUserChat}
        chat={props.chat}
        addMessage={props.addMessage}

        authName={props.authName}
        authAva={props.authAva}
        addNewMessage={props.addNewMessage}
         />
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        authName: state.auth.aboutMe.name,
        authAva: state.auth.img.ava,
        userId: state.auth._id,
        users: state.messagesPage.users,
        messages: state.messagesPage.chat.messages,
        chat: state.messagesPage.chat
    }
}

export default connect(
    mapStateToProps,
    {
        setUsersByMessages, 
        setUserChat,
        addNewMessage,
        addMessage,
    }
)
(DialogsContainer);