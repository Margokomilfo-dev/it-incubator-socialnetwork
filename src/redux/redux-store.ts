import {combineReducers, createStore, Store, applyMiddleware} from "redux"
import profileReduser from "./profileReduser"
import messagesReduser from "./messagesReduser"
import allUsersReduser from "./allUsersReduser"
import authReduser from "./authReducer"
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    allUsers: allUsersReduser,
    auth: authReduser
})
let store: Store = createStore(reducers,  applyMiddleware(thunkMiddleWare))

export type AllAppTypes = ReturnType<typeof reducers>
// @ts-ignore
window.store = store

export default store