import React from "react"
import Status from "./Status";
import { connect } from "react-redux";
import {AllAppTypes} from "../../redux/redux-store";


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
    isLogin: state.auth.isLogin
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {})(StatusContainer)
