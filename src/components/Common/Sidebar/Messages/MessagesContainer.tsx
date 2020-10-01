import React from "react"
import {addMessAC, changeNewMessTextAC} from "../../../../redux/messagesReduser"
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMess: (value: string) => {
            dispatch(addMessAC(value))
        },
        onChangeNewPostText: (value: string) => {
            dispatch(changeNewMessTextAC(value))
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer