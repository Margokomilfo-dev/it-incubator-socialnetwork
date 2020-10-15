import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {AllAppTypes} from "../../redux/redux-store"
import {authMeTC, setUserDataActionType} from "../../redux/authReducer"

type HeaderContainerPropsType = {
    isLogin: boolean
    authMeTC: any
}
type MapStateToPropsType = {
    isLogin: boolean
}
type MapDispatchToPropsType = {
    authMeTC: any
}

const HeaderContainer: React.FC<HeaderContainerPropsType> = ({ isLogin, authMeTC}) => {
    authMeTC()
    return (
        <Header isLogin={isLogin}/>
    )
}

let mapStateToProps = (state: AllAppTypes) => ({
    isLogin: state.auth.isLogin
})
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, { authMeTC})(HeaderContainer)
