import {Dispatch} from "redux";
import {authMeTC, setUserData} from "./authReducer"

const INITIALIZED_APP = 'INITIALIZED_APP'



type initialStateType = {
    initializedSuccess: boolean
}
let initialState  = {
    initializedSuccess: false
}

let appReducer  = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_APP:
            return {
                ...state,
                initializedSuccess: true
            }
        default:
            return state
    }
}
export type ActionsTypes =
    ReturnType<typeof initializedApp>


export let initializedApp = () => ({type: INITIALIZED_APP} as const)

export const initializedAppAC = () => (dispatch: any) => {
    dispatch(authMeTC()).then(() => {
        dispatch(initializedApp())
    })

}

export default appReducer