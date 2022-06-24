import { usersAPI, profileAPI } from "../../Api/Api";

// const SET_STATUS = "SET-STATUS";
const SET_USER_PROFILE_DATA = "SET-USER-PROFILE-DATA";
const ADD_LANGUAGE = "ADD-LANGUAGE";
const REMOVE_LANGUAGE = "REMOVE-LANGUAGE";
const UPDATE_AVA = "UPDATE-AVA";
const EDIT_LEVEL_LANGUAGE = "EDIT-LEVEL-LANGUAGE";
// const UPDATE_ABOUTME = "UPDATE-ABOUTME"; 

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
            description: null,
            hobby: null
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
        // case SET_STATUS:
        //     return {...state, profile: {...state.profile, 
        //         aboutMe: {...state.profile.aboutMe, status: action.status} 
        //     }};
        case SET_USER_PROFILE_DATA:
            return {...state, profile: {...state.profile, ...action.data}}
        case ADD_LANGUAGE:
            return {...state, profile: {...state.profile, languages: 
                {...state.profile.languages, 
                    [action.typeLng]: [...state.profile.languages[action.typeLng], action.languages]} 
                }
            }
        case REMOVE_LANGUAGE:
            return {...state, profile: {...state.profile, languages: {
                ...state.profile.languages, 
                    [action.typeLng]: state.profile.languages[action.typeLng].filter(lng => lng._id !== action.lngId)
            }}}
        case EDIT_LEVEL_LANGUAGE:
            return {...state, profile: {...state.profile, languages: {
                ...state.profile.languages, ["learning"]: 
                state.profile.languages["learning"].map(lng => {
                    if(lng._id === action.lngId)
                        return {...lng, level: action.level};
                    return {...lng};
                } )
            }}}
        // case UPDATE_AVA:
        //     return {...state, profile: {...state.profile, img: {...state.profile.img, ava: action.ava} }}
        // case UPDATE_ABOUTME:
        //     return {...state, profile: {...state.profile, aboutMe: {...action.aboutMe}}}
        default:
            return state;
    };
};

// actions
// export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUser = (data) => ({type: SET_USER_PROFILE_DATA, data});
export const addLanguage = (typeLng, languages) => ({type: ADD_LANGUAGE, typeLng, languages});
// export const updateAva = (ava) => ({type: UPDATE_AVA, ava});
export const removeLanguage = (typeLng, lngId) => ({type: REMOVE_LANGUAGE, typeLng, lngId});
export const editLanguageLevel = (lngId, level) => ({type: EDIT_LEVEL_LANGUAGE, lngId, level});
// export const updateAboutMe = (aboutMe) => ({type: UPDATE_ABOUTME, aboutMe});

// thukns
// export const updateUserStatus = (userId, status) => {
//     return async (dispatch) => {
//         let response = await usersAPI.updateStatus(userId, status);
        
//         if(response.status === 200) {
//             dispatch(setStatus(status));
//         }
//     }
// }

export const setProfileData = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId);

        if(!response.status) {
            dispatch(setUser(response));
        }
    }
}

// languages
export const addNewLanguage = (typeLng, lng, userId, level = null) => {
    return async (dispatch) => {
        let response = await profileAPI.addLanguage(typeLng, lng, userId, level);

        if(response.status === 200) {
            dispatch(addLanguage(typeLng, response.data.lng));
        }
    }
}

export const removeUserLanguage = (typeLng, lngId, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.removeLanguage(typeLng, lngId, userId);
        
        if(response.status === 200) {
            dispatch(removeLanguage(typeLng, lngId));
        }
    }
}

export const editUserLanguageLevel = (lngId, level, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.editLanguageLevel(lngId, level, userId);

        if(response.status === 200) {
            dispatch(editLanguageLevel(lngId, level));
        }
    }
}

// ava
// export const updateProfileAva = (imgName, userId) => {
//     return async (dispatch) => {
//         let response = await profileAPI.updateAva(imgName, userId);
//         dispatch(updateAva(response.data.imgPath));
//     }
// }

// update about me
// export const updateUserAboutMe = (aboutMe, userId) => {
//     return async (dispatch) => {
//         let response = await profileAPI.updateAboutMe(aboutMe, userId);
//         if(response.status === 200)
//             dispatch(updateAboutMe(aboutMe));
//     }
// }

export default profileReducer;