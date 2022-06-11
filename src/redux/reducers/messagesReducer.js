import { messagesAPI } from './../../Api/Api';

const SET_MESSAGES_USERS = "SET-MESSAGES-USERS"
const SET_CHAT = "SET-CHAT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
    users: [],
    chat: {
        roomId: null,
        companionId: null,
        messages: [],
    },
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES_USERS:
            return {...state, users: [...action.users]};
        case SET_CHAT:
            return {...state, chat: {...action.chat}};
        case ADD_NEW_MESSAGE:
            return {...state, chat: {...state.chat, messages: [
                ...state.chat.messages, action.message
            ]}}
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_MESSAGES_USERS, users});
export const setChat = (chat) => ({type: SET_CHAT, chat});
export const addMessage = (message) => ({type: ADD_NEW_MESSAGE, message});

export const setUsersByMessages = (userId) => {
    return async (dispatch) => {
        let response = await messagesAPI.getUsersByMessages(userId);

        if(response.status === 200) {
            dispatch(setUsers(response.data));
        }
    }
};

export const setUserChat = (companionId, userId) => {
    return async (dispatch) => {
        let response = await messagesAPI.getChat(companionId, userId);

        if(response.status === 200) {
            dispatch(setChat(response.data));
        }
    }
}

export const addNewMessage = (userId, companionId, message) => {
    return async (dispatch) => {
        let response = await messagesAPI.addMessage(userId, companionId, message);

        if(response.status === 200) {
            dispatch(addMessage(response.data));
        }
    }
}

export default messagesReducer;