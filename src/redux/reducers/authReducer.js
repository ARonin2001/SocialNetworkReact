import { headerAPI, usersAPI } from "../../Api/Api";

const SET_USER_DATA = "SET-USER-DATA";

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
    isAuth: false,
    
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userData, isAuth: action.isAuth }
        default:
            return state;
    }
}

export const setAuthUserData = (userData, isAuth = false) => ({type: SET_USER_DATA, userData, isAuth});

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
        } else {
            // let messageError = data.messages.length > 0 ? data.messages[0] : "Some error";
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

export default authReducer;