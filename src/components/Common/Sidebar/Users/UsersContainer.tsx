import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    setUsersCount,
    unfollow,
    UserType
} from "../../../../redux/reducers/allUsersReduser"
import {AllAppTypes} from "../../../../redux/redux-store";
import {getFollowingInProgress, getIsLogin, getTotalUsersCount, getUsers} from "../../../../redux/selectors";

type MapStateToPropsType = {
    users: Array<UserType>
    totalCountUsers: number
    followingInProgress: Array<number>
    isLogin: boolean
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: AllAppTypes) => ({
    users: getUsers(state),
    totalCountUsers: getTotalUsersCount(state),
    followingInProgress: getFollowingInProgress(state),
    isLogin: getIsLogin(state)
})

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>
(mapStateToProps, {follow, unfollow, setUsers, setUsersCount})(Users)