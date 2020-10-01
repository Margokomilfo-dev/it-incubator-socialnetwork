import {v1} from "uuid";

const ADD_MESS = 'ADD_MESS'
const CHANGE_NEW_MESS_TEXT = 'CHANGE_NEW_MESS_TEXT'

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type messagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

let initialState: messagePageType = {
    dialogs: [
        {id: v1(), name: 'Leo'},
        {id: v1(), name: 'Mia'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Leo'},
        {id: v1(), name: 'Mia'},
        {id: v1(), name: 'Vova'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hello!! YO'},
        {id: v1(), message: 'How is it going??!'},
        {id: v1(), message: 'Yo!!'},
        {id: v1(), message: 'YO!!'},
        {id: v1(), message: 'Hello!!'},
        {id: v1(), message: 'Hi!!'}
    ] as Array<MessagesType>
}

let messagesReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESS:
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: action.value}],
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

export let addMessAC = (value: string) => ({type: "ADD_MESS" , value})
export let changeNewMessTextAC = (text: string) => ({type: "CHANGE_NEW_MESS_TEXT", text})

export default messagesReduser