import { usersAPI, profileAPI } from "../../Api/Api";

const SET_STATUS = "SET-STATUS";
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    profile: {
        id: null,
        email: null,
        password: null,
        aboutMe: {
            name: null,
            lastname: null,
            gender: null,
            dateBirth: null,
            status: null,
        },
        img: {
            ava: null,
            backImg: null,
        }
    }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_STATUS:
            return {...state, profile: {...state.profile, 
                aboutMe: {...state.profile.aboutMe, status: action.status} 
            }};
        case SET_USER_DATA:
            return {...state, profile: {...state.profile, ...action.data}}
        default:
            return state;
    };
};

// actions
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUser = (data) => ({type: SET_USER_DATA, data});

// thukns
export const updateUserStatus = (userId, status) => {
    return async (dispatch) => {
        let response = await usersAPI.updateStatus(userId, status);

        if(response.status === 200) {
            dispatch(setStatus(status));
        }
    }
}

export const setProfileData = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId);

        if(!response.status) {
            dispatch(setUser(response));
        }
    }
}

export default profileReducer;