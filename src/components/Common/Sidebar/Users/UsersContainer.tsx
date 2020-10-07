import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, setUsersCount, unfollow, UserType} from "../../../../redux/allUsersReduser"


let mapStateToProps = (state: any) => {
    return ({
        users: state.allUsers.users,
        totalCountUsers: state.allUsers.totalCountUsers
    })
}

export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setUsersCount})(Users)