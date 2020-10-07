import React, {useEffect} from "react"
import axios from "axios"
import Profile from "./Profile"
import { connect } from "react-redux"
import {ProfileType, setProfile} from "../../../redux/profileReduser"
import { withRouter, RouteComponentProps } from "react-router-dom"
import {AllAppTypes} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}
type PathPropsType = {userId: string}
type PropsType = RouteComponentProps<PathPropsType> & MapStateToPropsType & MapDispatchToPropsType


let ProfileContainer = (props:PropsType ) => {
    useEffect(() => {
        let userId = props.match.params.userId
        !userId && (userId = '6314')
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {props.setProfile(response.data)})}, [])
    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStateToProps= (state: AllAppTypes): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default withRouter (connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {setProfile})(ProfileContainer))