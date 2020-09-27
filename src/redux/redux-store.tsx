import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import messagesReduser from "./messagesReduser.";

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser
})
let store = createStore(reducers)

export default store