const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

export type PostsType = {
    likesCount: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState: ProfilePageType = {
        posts: [
            {content: 'Hello! This is my first post!', likesCount: 25},
            {content: 'Hello! This is my second post!', likesCount: 115},
            {content: 'Hello! This is my third post!', likesCount: 15},
            {content: 'HI!', likesCount: 0},
        ] as Array<PostsType>,
        newPostText: ''
}

let profileReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newObj = {
                content: state.newPostText,
                likesCount: 10
            }
            state.posts.push(newObj)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

export let addPostAC = () =>  ({type: "ADD_POST"})
export let changeNewPostTextAC = (text: string) => ({type: "CHANGE_NEW_POST_TEXT", text: text })

export default profileReduser