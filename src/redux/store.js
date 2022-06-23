import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import languagesReducer from './reducers/languagesReducer';
import usersReducer from "./reducers/usersReducer";
import messagesReducer from './reducers/messagesReducer';
import postReducer from './reducers/postReducer';


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    lngReducer: languagesReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer,
    postsPage: postReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;