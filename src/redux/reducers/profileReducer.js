import { usersAPI } from "../../Api/Api";

const SET_STATUS = "SET-STATUS";

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
        }
    }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_STATUS:
            return {...state, profile: {...state.profile, 
                aboutMe: {...state.profile.aboutMe, status: action.status} 
            }};
        default:
            return state;
    };
};

// actions
export const setStatus = (status) => ({type: SET_STATUS, status});

export const updateUserStatus = (userId, status) => {
    return async (dispatch) => {
        let response = await usersAPI.updateStatus(userId, status);

        if(response.status === 200) {
            dispatch(setStatus(status));
        }

    }
}

export default profileReducer;