import {combineReducers, createStore, Store, applyMiddleware} from "redux"
import profileReduser from "./reducers/profileReduser"
import messagesReduser from "./reducers/messagesReduser"
import allUsersReduser from "./reducers/allUsersReduser"
import authReduser from "./reducers/authReducer"
import thunkMiddleWare from 'redux-thunk'
import appReducer from "./reducers/appReducer";
//import {reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    allUsers: allUsersReduser,
    auth: authReduser,
    app: appReducer
    //form: formReducer
})
let store: Store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type AllAppTypes = ReturnType<typeof reducers>

// @ts-ignore
window.store = store

export default store