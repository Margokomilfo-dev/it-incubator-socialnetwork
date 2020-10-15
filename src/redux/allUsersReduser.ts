import {UsersApi} from "./api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETUSERSCOUNT = 'SETUSERSCOUNT'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

export type AllUsersPageType = {
    users: Array<UserType>
    totalCountUsers: number
    error: null | string
    isFetching: boolean,
    followingInProgress: Array<number>

}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}

let initialState: AllUsersPageType = {
    users: [] as Array<UserType>,
    totalCountUsers: 0,
    error: null,
    isFetching: false,
    followingInProgress: []
}

let allUsersReduser = (state = initialState, action: ActionsTypes): AllUsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SETUSERS:
            return {
                ...state,
                users: action.users
            }
        case SETUSERSCOUNT:
            return {
                ...state,
                totalCountUsers: action.totalCountUsers
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
export type ActionsTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setUsersCount>
    | ReturnType<typeof toggleFollowingInProgress>

export const followSuccess = (id: number) => ({type: "FOLLOW", userId: id} as const)
export const unfollowSuccess = (id: number) => ({type: "UNFOLLOW", userId: id} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SETUSERS", users} as const)
export const setUsersCount = (totalCountUsers: number) => ({type: "SETUSERSCOUNT", totalCountUsers} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
} as const)


export const follow = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleFollowingInProgress(true, userId))
    UsersApi.follow(userId).then(response => {
        response.resultCode === 0 && dispatch(followSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    })
}
export const unfollow = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleFollowingInProgress(true, userId))
    UsersApi.unfollow(userId).then(response => {
        response.resultCode === 0 && dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    })
}

export default allUsersReduser