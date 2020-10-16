import React from "react"
import {addMess, messagePageType} from "../../../../redux/messagesReduser"
import Messages from "./Messages"
import {connect} from "react-redux"
import {AllAppTypes} from "../../../../redux/redux-store";
import {withLoginRedirect} from "../../../../HOC/withLoginRedirect";


type MapStateToPropsType = {
    messagePage: messagePageType
    isLogin: boolean
}
type MapDispatchToPropsType = {
    addMess: (value: string) => void
}

let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => {
    return {
        messagePage: state.messagePage,
        isLogin: state.auth.isLogin
    }
}

let withRedirect = withLoginRedirect(Messages)

export const MessagesContainer =
    connect <MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
(mapStateToProps, {addMess})(withLoginRedirect(withRedirect))
