import { createStore, combineReducers, applyMiddleware } from "redux";
import stateReducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    state: stateReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;