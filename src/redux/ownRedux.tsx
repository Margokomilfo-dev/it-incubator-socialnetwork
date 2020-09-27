
const ADD_POST = 'ADD_POST'
const ADD_MESS = 'ADD_MESS'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const CHANGE_NEW_MESS_TEXT = 'CHANGE_NEW_MESS_TEXT'

export type PostsType = {
    likesCount: number
    content: string | number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type messagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: messagePageType
}
export type StoreType = {
    _state: StateType,
    getState: any
    _call: Function
    subscribe: (observer: Function) => void,
    dispatch: (action: any) => void

}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {content: 'Hello! This is my first post!', likesCount: 25},
                {content: 'Hello! This is my second post!', likesCount: 115},
                {content: 'Hello! This is my third post!', likesCount: 15},
                {content: 'HI!', likesCount: 0},
            ] as Array<PostsType>,
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Leo'},
                {id: 2, name: 'Mia'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Leo'},
                {id: 5, name: 'Mia'},
                {id: 6, name: 'Vova'}
            ] as Array<DialogsType>,
            messages: [
                {id: 1, message: 'Hello!! YO'},
                {id: 2, message: 'How is it going??!'},
                {id: 3, message: 'Yo!!'},
                {id: 4, message: 'YO!!'},
                {id: 5, message: 'Hello!!'},
                {id: 6, message: 'Hi!!'}
            ] as Array<MessagesType>,
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    _call() { console.log('state is changed')},
    // @ts-ignore
    subscribe (observer: Function) { this._call = observer },

    dispatch (action) {
        debugger
        if (action.type === ADD_POST ) {
                let newObj = {
                    content: this._state.profilePage.newPostText,
                    likesCount: 10
                }
                this._state.profilePage.posts.push(newObj)
                this._state.profilePage.newPostText = ''
                this._call()
        } else if (action.type === CHANGE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.text
            this._call()
        } else if (action.type === ADD_MESS) {
            let newObj = {
                id: 8,
                message: this._state.messagePage.newMessageText,
            }
            this._state.messagePage.messages.push(newObj)
            this._state.messagePage.newMessageText = ''
            this._call()
        } else if (action.type === CHANGE_NEW_MESS_TEXT) {
            this._state.messagePage.newMessageText = action.text
            this._call()
        }
    }

}

export let addPostAC = () =>  ({type: "ADD_POST"})
export let changeNewPostTextAC = (text: string) => ({type: "CHANGE_NEW_POST_TEXT", text: text })
export let addMessAC = () => ({type: "ADD_MESS"})
export let changeNewMessTextAC = (text: string) => ({type: "CHANGE_NEW_MESS_TEXT", text: text })

export default store

