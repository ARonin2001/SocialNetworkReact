import { messagesAPI } from './../../Api/Api';

const SET_MESSAGES_USERS = "SET-MESSAGES-USERS"
const SET_CHAT = "SET-CHAT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const ADD_NEW_CHAT = "ADD-NEW-CHAT";

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
            let messagesId = state.chat.messages.map(msg => msg._id);

            if(!messagesId.includes(action.message._id)) {
                return {...state, chat: {...state.chat, messages: [
                    ...state.chat.messages, action.message
                ]}}
            }
            return state;
        case ADD_NEW_CHAT:
            return {...state, chat: {...action.chat}}
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_MESSAGES_USERS, users});
export const setChat = (chat) => ({type: SET_CHAT, chat});
export const addMessage = (message) => ({type: ADD_NEW_MESSAGE, message});
// export const addChat = (chat) => ({type: ADD_NEW_CHAT, chat});

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

export const addNewMessage = (userId, companionId, message, sender) => {
    return async (dispatch) => {
        // add message for me
        let response = await messagesAPI.addMessage(userId, companionId, message, sender);
        // add message for companion
        await messagesAPI.addMessage(companionId, userId, message, "companion");

        if(response.status === 200) {
            dispatch(addMessage(response.data));
        }
    }
}
// CHAT
export const addNewChat = (companionId, userId) => {
    return async (dispatch) => {
        // create chat for me
        let response = await messagesAPI.addChat(companionId, userId);
        // create chat for companion
        await messagesAPI.addChat(userId, companionId, response.data.roomId);

        if(response.status === 200) {
            dispatch(setChat(response.data));
        }
    }
}

export default messagesReducer;