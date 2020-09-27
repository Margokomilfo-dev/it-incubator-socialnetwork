import React from "react"
import {addMessAC, changeNewMessTextAC, messagePageType} from "../../../../redux/messagesReduser."
import Messages from "./Messages";

type MessagesContainer = {
    store: any
}

function MessagesContainer(props:MessagesContainer) {

    let addMess = () => {
        props.store.dispatch(addMessAC())
    }
    let onChangeNewPostText = (value: string) => {
        props.store.dispatch(changeNewMessTextAC(value))
    }
    return <Messages addMess={addMess} onChangeNewPostText={onChangeNewPostText} messagePage={props.store.getState().messagePage}/>
}


export default MessagesContainer