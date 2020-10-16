import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {AllAppTypes} from "../../redux/redux-store"
import {authMeTC} from "../../redux/authReducer"

type HeaderContainerPropsType = {
    isLogin: boolean
    authMeTC: any
    login: string | null
}

type MapStateToPropsType = {
    isLogin: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    authMeTC: () => void
}

const HeaderContainer: React.FC<HeaderContainerPropsType> = ({ isLogin, authMeTC, login}) => {
    authMeTC()
    return (
        <Header isLogin={isLogin} login={login}/>
    )
}

let mapStateToProps = (state: AllAppTypes) => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, { authMeTC})(HeaderContainer)
