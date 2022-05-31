import { usersAPI } from "../../Api/Api";

const SET_USERS = "SET-USER-DATA";

let initialState = {
    users: [
        {
            _id: null,
            aboutMe: {
                name: null,
                lastname: null,
                locatin: {},
                age: null,
                gender: null,
            },
            img: {
                ava: null,
            },
            languages: {
                native: [],
                fluent: [],
                learning: []
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]};
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});

export const setListUsers = (count, page) => {
    return async (dispatch) => {
        let response = await usersAPI.getUsers(count, page);
        
        if(response.status === 200) {
            dispatch(setUsers(response.data));
        } 
    }
}

export default usersReducer;