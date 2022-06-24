import { headerAPI, usersAPI, messagesAPI, profileAPI } from "../../Api/Api";

const SET_USER_DATA = "SET-USER-DATA";
const ADD_FRIEND = "ADD-FRIEND";
const REMOVE_FRIEND = "REMOVE-FRIEND";
const SET_MESSAGES = "SET-MESSAGES";
const SET_STATUS = "SET-STATUS";
const UPDATE_AVA = "UPDATE-AVA";
const UPDATE_ABOUTME = "UPDATE-ABOUTME"; 

let initialState = {
    _id: null,
    email: null,
    password: null,
    friends: [],
    aboutMe: {
        name: null,
        lastname: null,
        status: null,
    },
    img: {
        backImg: null,
        ava: null,
    },
    chat: [],
    isAuth: false,
    
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userData, isAuth: action.isAuth }
        case ADD_FRIEND:
            return {...state, friends: [...state.friends, action.user]};
        case REMOVE_FRIEND:
            return {...state, friends: state.friends.filter(u => u.id !== action.friendId)};
        case SET_MESSAGES:
            return {...state, messages: [...action.messages]};
        case SET_STATUS:
            return {...state, aboutMe: {...state.aboutMe, status: action.status} };
        case UPDATE_AVA:
            return {...state, img: {...state.img, ava: action.ava} }
        case UPDATE_ABOUTME:
            return {...state, aboutMe: {...state.aboutMe, ...action.aboutMe}}
        default:
            return state;
    }
}

export const setAuthUserData = (userData, isAuth = false) => ({type: SET_USER_DATA, userData, isAuth});
export const addFriend = (user) => ({type: ADD_FRIEND, user});
export const removeFriend = (friendId) => ({type: REMOVE_FRIEND, friendId});
export const setMessages = (messages) => ({type: SET_MESSAGES, messages});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateAva = (ava) => ({type: UPDATE_AVA, ava});
export const updateAboutMe = (aboutMe) => ({type: UPDATE_ABOUTME, aboutMe});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await headerAPI.getAuthUsers();
        
        if(data.resultCode === 0) {
            let {_id, email, login} = data.data;
            dispatch(setAuthUserData(_id, email, login, true));
        } 
    }
}

export const getLoginUser = (email, password) => {    
    return async (dispatch) => {
        let response = await usersAPI.getLoginUser(email, password);
        
        if(response.status === 200) {
            dispatch(setAuthUserData(response.data.user, true));
        }
    }
}

export const createNewUser = (userData) => {
    return async (dispatch) => {
        let response = await usersAPI.createNewUser(userData);
        
        if(response.status === 201) {
            dispatch(getLoginUser(userData.email, userData.password));
        } else {
            return response;
        }
    }
}

export const addNewFriend = (friendId, userId) => {
    return async(dispatch) => {
        let response = await usersAPI.addFriend(friendId, userId);

        if(response.status === 200) {
            dispatch(addFriend(response.data));
        }
    }
}

export const deleteFriend = (friendId, userId) => {
    return async (dispatch) => {
        let response = await usersAPI.removeFriend(friendId, userId);

        if(response.status === 200) {
            dispatch(removeFriend(friendId));
        }
    }
}

// messages
export const setUserMessages = (companionId, userId) => {
    return async (dispatch) => {
        let response = await messagesAPI.getMessages(companionId, userId);

        if(response.status === 200) {
            console.log(response.data);
            // dispatch();
        }
    }
}

// STATUS
export const updateUserStatus = (userId, status) => {
    return async (dispatch) => {
        let response = await usersAPI.updateStatus(userId, status);
        
        if(response.status === 200) {
            dispatch(setStatus(status));
        }
    }
}

// AVA
export const updateProfileAva = (imgName, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.updateAva(imgName, userId);
        dispatch(updateAva(response.data.imgPath));
    }
}

// ABOUT ME
export const updateUserAboutMe = (aboutMe, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.updateAboutMe(aboutMe, userId);
        
        if(response.status === 200)
            dispatch(updateAboutMe(aboutMe));
    }
}

export default authReducer;