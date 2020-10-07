import {v1} from "uuid"

const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'

export type PostsType = {
    id: string
    likesCount: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = { small: string, large: string }


let initialState: ProfilePageType = {
    posts: [
        {id: v1(), content: 'Hello! This is my first post!', likesCount: 25},
        {id: v1(), content: 'Hello! This is my second post!', likesCount: 115},
        {id: v1(), content: 'Hello! This is my third post!', likesCount: 15},
        {id: v1(), content: 'HI!', likesCount: 0},
    ] as Array<PostsType>,
    profile: null
}

let profileReduser = (state:ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: v1(), content: action.value, likesCount: 10}, ...state.posts]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            }
        default:
            return state
    }
}
export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>

export let addPost = (value: string) => ({type: "ADD_POST", value} as const)
export let setProfile = (profile: ProfileType) => ({type: "SET_PROFILE", profile} as const)

export default profileReduser