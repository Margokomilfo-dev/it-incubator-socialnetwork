import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, setUsersCountAC, unfollowAC, UserType} from "../../../../redux/allUsersReduser"


let mapStateToProps = (state: any) => {
    return ({
        users: state.allUsers.users,
        totalCountUsers: state.allUsers.totalCountUsers
    })
}

let mapDispatchToProps = (dispatch: any) => ({
    follow: (id: string) => {
        dispatch(followAC(id))
    },
    unfollow: (id: string) => {
        dispatch(unfollowAC(id))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    },
    setUsersCount: (totalCount: number) => {
        dispatch(setUsersCountAC(totalCount))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)