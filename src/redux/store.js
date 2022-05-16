import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;