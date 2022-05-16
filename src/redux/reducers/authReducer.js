import { headerAPI, usersAPI } from "../../Api/Api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    id: null,
    email: null,
    password: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, password, isAuth = false) => ({type: SET_USER_DATA, data: {
    id, email, password, isAuth
}});

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
        let data = await usersAPI.getLoginUser(email, password);

        if(data.status === 200) {
            let {_id, email, password} = data.data.user;
            dispatch(setAuthUserData(_id, email, password, true));
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