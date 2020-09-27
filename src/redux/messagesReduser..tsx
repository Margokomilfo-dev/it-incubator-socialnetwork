const ADD_MESS = 'ADD_MESS'
const CHANGE_NEW_MESS_TEXT = 'CHANGE_NEW_MESS_TEXT'

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type messagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

let initialState: messagePageType = {
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

let messagesReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESS:
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: state.newMessageText}],
                newMessageText: ''
            }
        case CHANGE_NEW_MESS_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state
    }
}

export let addMessAC = () => ({type: "ADD_MESS"})
export let changeNewMessTextAC = (text: string) => ({type: "CHANGE_NEW_MESS_TEXT", text: text})

export default messagesReduser