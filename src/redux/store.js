import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/authReducer';


let reducers = combineReducers({
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;