import React from "react"
import {addMess, messagePageType} from "../../../../redux/messagesReduser"
import Messages from "./Messages"
import {connect} from "react-redux"
import {AllAppTypes} from "../../../../redux/redux-store";


type MapStateToPropsType = {
    messagePage: messagePageType
}
type MapDispatchToPropsType = {
    addMess: (value: string) => void
}

let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}

//<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
export const MessagesContainer = connect <MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {addMess})(Messages)
