import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {AllAppTypes} from "../../redux/redux-store"
import {authMeTC, logOut} from "../../redux/authReducer"

type HeaderContainerPropsType = {
    isLogin: boolean
    authMeTC: any
    login: string | null
    logOut: () => void
}

type MapStateToPropsType = {
    isLogin: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    authMeTC: () => void
    logOut: () => void
}

const HeaderContainer: React.FC<HeaderContainerPropsType> = ({ isLogin, authMeTC, login, logOut}) => {
    authMeTC()
    return (
        <Header isLogin={isLogin} login={login} logOut={logOut}/>
    )
}

let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, { authMeTC, logOut})(HeaderContainer)
