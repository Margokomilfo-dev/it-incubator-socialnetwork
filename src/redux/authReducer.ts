const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isLogin: boolean
}
let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false
}

let authReduser = (state:AuthType = initialState, action: ActionsTypes):AuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isLogin: true
            }
        default:
            return state
    }
}
export type ActionsTypes = ReturnType<typeof setUserData>

export type setUserDataActionType = {
    id: number
    email: string
    login: string
}
export let setUserData = (data: setUserDataActionType) => ({type: SET_AUTH_USER_DATA, data} as const)

export default authReduser