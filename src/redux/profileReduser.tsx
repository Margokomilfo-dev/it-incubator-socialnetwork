import { v1 } from "uuid"
const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

export type PostsType = {
    id: string
    likesCount: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), content: 'Hello! This is my first post!', likesCount: 25},
        {id: v1(), content: 'Hello! This is my second post!', likesCount: 115},
        {id: v1(), content: 'Hello! This is my third post!', likesCount: 15},
        {id: v1(), content: 'HI!', likesCount: 0},
    ] as Array<PostsType>
}

let profileReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{content: action.value, likesCount: 10}, ...state.posts],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state
    }
}

export let addPostAC = (value: string) => ({type: "ADD_POST", value: value})
export let changeNewPostTextAC = (text: string) => ({type: "CHANGE_NEW_POST_TEXT", text: text})

export default profileReduser