const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'


export type AllUsersPageType = {
    users: Array<UserType>
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
    users: [] as Array<UserType>
}

let allUsersReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.id) {
                       return {...u, followed: true}
                   }})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }})
            }
        case SETUSERS:
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export let followAC = (id: string) => ({type: "FOLLOW", iserId: id})
export let unfollowAC = (id: string) => ({type: "UNFOLLOW", iserId: id})
export let setUsersAC = (users: Array<UserType>) => ({type: "SETUSERS", users: users})


export default allUsersReduser