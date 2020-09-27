import profileReduser, {PostsType, ProfilePageType} from "./profileReduser"
import messagesReduser,{messagePageType, DialogsType, MessagesType} from "./messagesReduser."

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
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.messagePage = messagesReduser(this._state.messagePage, action)

        this._call()
    }
}


export default store

