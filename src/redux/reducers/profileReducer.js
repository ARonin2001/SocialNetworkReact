import { usersAPI, profileAPI } from "../../Api/Api";

const SET_STATUS = "SET-STATUS";
const SET_USER_DATA = "SET-USER-DATA";
const ADD_LANGUAGE = "ADD-LANGUAGE";
const UPDATE_AVA = "UPDATE-AVA";

let initialState = {
    profile: {
        _id: null,
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
        },
        languages: {
            native: [],
            fluent: [],
            learning: []
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
        case ADD_LANGUAGE:
            return {...state, profile: {...state.profile, languages: 
                {...state.profile.languages, 
                    [action.typeLng]: [...state.profile.languages[action.typeLng], action.languages]} 
                }
            }
        case UPDATE_AVA:
            return {...state, profile: {...state.profile, img: {...state.profile.img, ava: action.ava}
                
            }}
        default:
            return state;
    };
};

// actions
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUser = (data) => ({type: SET_USER_DATA, data});
export const addLanguage = (typeLng, languages) => ({type: ADD_LANGUAGE, typeLng, languages});
export const updateAva = (ava) => ({type: UPDATE_AVA, ava});

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

export const addNewLanguage = (typeLng, lng, userId, level = null) => {
    return async (dispatch) => {
        let response = await profileAPI.addLanguage(typeLng, lng, userId, level);
        console.log(response);
        if(response.status === 200) {
            dispatch(addLanguage(typeLng, response.data.lng));
        }
    }
}

export const updateProfileAva = (imgName, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.updateAva(imgName, userId);
        dispatch(updateAva(response.data.imgPath));
    }
}

export default profileReducer;