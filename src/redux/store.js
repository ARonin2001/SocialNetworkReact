import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import languagesReducer from './reducers/languagesReducer';
import usersReducer from "./reducers/usersReducer";


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    lngReducer: languagesReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;