import React from "react"
import Status from "./Status";
import { connect } from "react-redux";
import {AllAppTypes} from "../../redux/redux-store";
import {getIsLogin} from "../../redux/selectors";


type MapStateToPropsType = {
    isLogin: boolean
}
type MapDispatchToPropsType = {}

type StatusContainerPropsType = {
    isLogin: boolean
}

function StatusContainer(props:StatusContainerPropsType) {
    return (
        <Status isLogin={props.isLogin}/>
    )
}
let mapStateToProps =(state: AllAppTypes):MapStateToPropsType => ({
    isLogin: getIsLogin(state)
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {})(StatusContainer)
