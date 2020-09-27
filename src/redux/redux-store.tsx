import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import messagesReduser from "./messagesReduser.";

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser
})
let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store