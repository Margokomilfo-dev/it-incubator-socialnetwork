import {AuthApi, UsersApi} from "../api";
import {Dispatch} from "redux"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_ERROR = 'SET_ERROR'

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isLogin: boolean,
    serverError: string | null
}
let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false,
    serverError: null
}

let authReduser = (state:AuthType = initialState, action: ActionsTypes):AuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isLogin: action.isLogin,
                serverError: null
            }
            case SET_ERROR:
            return {
                ...state,
                serverError: action.error
            }
        default:
            return state
    }
}
export type ActionsTypes = ReturnType<typeof setUserData> | ReturnType<typeof setError>

export type setUserDataActionType = {
    id: number | null
    email: string | null
    login: string | null
}
export const setUserData = (data: setUserDataActionType, isLogin: boolean) => ({type: SET_AUTH_USER_DATA, data, isLogin} as const)
export const setError = (error: string) => ({type: SET_ERROR, error} as const)

export const authMeTC = () => (dispatch: Dispatch<ActionsTypes>) => {
   return AuthApi.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(response.data.data, true))
        }
    })
}
export const login = (email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) =>
    (dispatch: Dispatch<ActionsTypes>) => {
        AuthApi.loginApi(email, password,rememberMe,captcha).then(response => {
            if (response.resultCode === 0){
                AuthApi.authMe()
                dispatch(setUserData(response.data.data, true))
            } else {
                dispatch(setError(response.messages[0]))
            }
        })
    }

export const logOut = () =>
    (dispatch: Dispatch<ActionsTypes>) => {
        AuthApi.logOutApi().then(response => {
            if (response.resultCode === 0){
                dispatch(setUserData({email: null, id: null, login: null}, false))
            }
        })
    }

export default authReduser