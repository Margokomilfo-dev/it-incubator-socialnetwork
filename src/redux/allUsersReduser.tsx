const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETUSERSCOUNT = 'SETUSERSCOUNT'



export type AllUsersPageType = {
    users: Array<UserType>
    totalCountUsers: number
    error: null | string

}

export type UserType = {
    name: string
    id: string
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
    error: null
}

let allUsersReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: false}
                   }
                   return u
                })
            }
        case UNFOLLOW:
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case SETUSERS:
            return{
                ...state,
                users: action.users
            }
        case SETUSERSCOUNT:
            return {
                ...state,
                totalCountUsers: action.totalCountUsers
            }
        default:
            return state
    }
}

export let followAC = (id: string) => ({type: "FOLLOW", userId: id})
export let unfollowAC = (id: string) => ({type: "UNFOLLOW", userId: id})
export let setUsersAC = (users: Array<UserType>) => ({type: "SETUSERS", users})
export let setUsersCountAC = (totalCountUsers: number) => ({type: "SETUSERSCOUNT", totalCountUsers})


export default allUsersReduser