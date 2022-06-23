import { postsAPI } from "../../Api/Api";

const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
    posts: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {...state, posts: [...state.posts, action.post]}
        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_NEW_POST, post});

export const addNewPost = (userId, data) => {
    return async (dispatch) => {
        let response = await postsAPI.addPost(userId, data);
        
        if(response.status === 200) {
            dispatch(addPost(response.data));
        } 
    }
}

export default postReducer;