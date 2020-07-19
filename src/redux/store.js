import { createStore, combineReducers } from "redux";
import stateReduser from "./reducer";

let reducers = combineReducers({
    state: stateReduser
})

let store = createStore(reducers);

export default store;