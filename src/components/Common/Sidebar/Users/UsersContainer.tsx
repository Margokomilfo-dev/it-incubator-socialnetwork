import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    setUsersCount,
    unfollow,
    UserType
} from "../../../../redux/allUsersReduser"
import {AllAppTypes} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    users: Array<UserType>
    totalCountUsers: number
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: AllAppTypes) => {
    return ({
        users: state.allUsers.users,
        totalCountUsers: state.allUsers.totalCountUsers,
        followingInProgress: state.allUsers.followingInProgress
    })
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
(mapStateToProps, {follow, unfollow, setUsers, setUsersCount})(Users)