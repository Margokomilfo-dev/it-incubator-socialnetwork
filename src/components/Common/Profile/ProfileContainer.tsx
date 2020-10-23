import React, {useEffect} from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getProfileTC, ProfileType, setProfile, getStatus, updateStatus} from "../../../redux/profileReduser"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {AllAppTypes} from "../../../redux/redux-store"
import {ProfileApi} from "../../../redux/api";
//import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string | null
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
    getStatus: (newStatus: number) => void
    getProfileTC: (userId: string) => void
    updateStatus: (status: string) => void

}
type PathPropsType = { userId: string }
type PropsType = RouteComponentProps<PathPropsType> & MapStateToPropsType & MapDispatchToPropsType


let ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId
        !userId && (userId = '6314')
        props.getProfileTC(userId)


    }, [])

    if (props.profile) {
        props.getStatus(props.profile.userId)
    }


    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={updateStatus}/>
    )
}

let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// export default compose (
//     withRouter,
//     connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {setProfile, getProfileTC}),
// )(ProfileContainer)

export default withRouter(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {
    setProfile,
    getProfileTC,
    getStatus,
    updateStatus,
})(ProfileContainer))