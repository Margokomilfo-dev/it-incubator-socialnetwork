import {AllAppTypes} from "./redux-store";

export const getAllUsersReducer = (state: AllAppTypes) => {
    return state.allUsers
}
export const getAuthReducer = (state: AllAppTypes) => {
    return state.auth
}
export const getProfilePageReducer = (state: AllAppTypes) => {
    return state.profilePage
}
export const getMessagePageReducer = (state: AllAppTypes) => {
    return state.messagePage
}
export const getAppReducer = (state: AllAppTypes) => {
    return state.app
}


//allUsers

export const getUsers = (state: AllAppTypes) => {
    return state.allUsers.users
}
export const getTotalUsersCount = (state: AllAppTypes) => {
    return state.allUsers.totalCountUsers
}
export const getError = (state: AllAppTypes) => {
    return state.allUsers.error
}
export const getFollowingInProgress = (state: AllAppTypes) => {
    return state.allUsers.followingInProgress
}

//app

export const getInitializedSuccess = (state: AllAppTypes) => {
    return state.app.initializedSuccess
}

//auth

export const getId = (state: AllAppTypes) => {
    return state.auth.id
}
export const getEmail = (state: AllAppTypes) => {
    return state.auth.email
}
export const getLogin = (state: AllAppTypes) => {
    return state.auth.login
}
export const getIsFetching = (state: AllAppTypes) => {
    return state.auth.isFetching
}
export const getIsLogin = (state: AllAppTypes) => {
    return state.auth.isLogin
}
export const getServerError = (state: AllAppTypes) => {
    return state.auth.serverError
}

//messages
export const getDialogs = (state: AllAppTypes) => {
    return state.messagePage.dialogs
}
export const getMessages = (state: AllAppTypes) => {
    return state.messagePage.messages
}

//profile
export const getPosts = (state: AllAppTypes) => {
    return state.profilePage.posts
}
export const getProfile = (state: AllAppTypes) => {
    return state.profilePage.profile
}
export const getUserStatus = (state: AllAppTypes) => {
    return state.profilePage.status
}