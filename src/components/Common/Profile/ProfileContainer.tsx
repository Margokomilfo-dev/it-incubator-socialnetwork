import React, {useEffect} from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import {getProfileTC, ProfileType, setProfile} from "../../../redux/profileReduser"
import { withRouter, RouteComponentProps } from "react-router-dom"
import {AllAppTypes} from "../../../redux/redux-store"

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
    getProfileTC: (userId: string) => void
}
type PathPropsType = {userId: string}
type PropsType = RouteComponentProps<PathPropsType> & MapStateToPropsType & MapDispatchToPropsType


let ProfileContainer = (props:PropsType ) => {
    useEffect(() => {
        let userId = props.match.params.userId
        !userId && (userId = '6314')
        props.getProfileTC(userId)
    }, [])
    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStateToProps= (state: AllAppTypes): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default withRouter (connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {setProfile, getProfileTC})(ProfileContainer))