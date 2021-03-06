import {addMessage, messagePageType} from "../../../../redux/reducers/messagesReduser"
import Messages from "./Messages"
import {connect} from "react-redux"
import {AllAppTypes} from "../../../../redux/redux-store"
import {withLoginRedirect} from "../../../../HOC/withLoginRedirect"
import {getIsFetching, getIsLogin, getMessagePageReducer} from "../../../../redux/selectors";
//import {compose} from "redux"

type MapStateToPropsType = {
    messagePage: messagePageType
    isLogin: boolean
}
type MapDispatchToPropsType = {
    addMessage: (value: { messageText: string }) => void
}

let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => {
    return {
        messagePage: getMessagePageReducer(state),
        isLogin: getIsLogin(state)
    }
}

let withRedirect = withLoginRedirect(Messages)


export const MessagesContainer =
    connect <MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
(mapStateToProps, {addMessage})(withRedirect)

// export const MessageContainer = compose (
//     connect <MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
//     (mapStateToProps, {addMess}),
//     withLoginRedirect
// )(Messages)
