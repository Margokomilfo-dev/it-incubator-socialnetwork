import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {AllAppTypes} from "../../redux/redux-store"
import {authMeTC, logOut} from "../../redux/reducers/authReducer"
import {getIsLogin, getLogin} from "../../redux/selectors";

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
    isLogin: getIsLogin(state),
    login: getLogin(state)
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, { authMeTC, logOut})(HeaderContainer)
