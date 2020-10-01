import {combineReducers, createStore} from "redux"
import profileReduser from "./profileReduser"
import messagesReduser from "./messagesReduser"
import allUsersReduser from "./allUsersReduser"

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    allUsers: allUsersReduser
})
let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store