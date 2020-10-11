import React, {useEffect} from "react"
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AllAppTypes} from "../../redux/redux-store"
import {setUserData, setUserDataActionType} from "../../redux/authReducer";
import {ProfileType} from "../../redux/profileReduser";
import {AuthApi} from "../../redux/api";

type HeaderContainerPropsType = {
    setUserData: (data: setUserDataActionType) => void
    isLogin: boolean
}
type MapStateToPropsType = {
    isLogin: boolean
}
type MapDispatchToPropsType = {
    setUserData: (data: setUserDataActionType) => void
}

const HeaderContainer: React.FC<HeaderContainerPropsType> = ({setUserData, isLogin}) => {
    AuthApi.authMe().then(response => {
        debugger
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                setUserData(response.data.data)
            }
        }

    )

    return (
        <Header isLogin={isLogin}/>
    )
}

let mapStateToProps = (state: AllAppTypes) => ({
    isLogin: state.auth.isLogin
})
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {setUserData})(HeaderContainer)
