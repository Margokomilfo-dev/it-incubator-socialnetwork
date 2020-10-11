import React, {useEffect, useState} from "react"
import {toggleFollowingInProgress, setUsers, setUsersCount, UserType} from "../../../../redux/allUsersReduser"
import s from './Users.module.css'
import axios from 'axios'
import Pagination from "../Pagination/Pagination"
import User from "./User"
import Preloader from "../../Preloader/Preloader"
import { UsersApi } from "../../../../redux/api"

type UsersPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
    setUsersCount: (totalCount: number) => void
    totalCountUsers: number
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}


const Users: React.FC<UsersPropsType> = ({follow, unfollow, setUsers, users,
                                             setUsersCount, totalCountUsers, toggleFollowingInProgress,
                                             followingInProgress}) => {


    let [currentPage, setCurrentPage] = useState<number>(1)
    let [isFetching, setIsFetching] = useState<boolean>(false)
//----------------axios-------------------------------

    useEffect(() => {
        !users.length && setIsFetching(true)
        UsersApi.getUsers(currentPage).then(response => {
            setUsers(response.items)
            setUsersCount(response.totalCount)
            setIsFetching(false )
        })
    }, []);

//-----------------------------------------------------
    let totalCountPage = Math.ceil(totalCountUsers / 15)

    let totalCountPageArr = []
    for (let i = 1; i <= totalCountPage; i++) {
        totalCountPageArr.push(i)
    }

    return (
        <>
            {isFetching ? <Preloader/> :

            <div className={s.usersStyle}>
                <div className={s.pagination}>
                    <Pagination totalCountPageArr={totalCountPageArr}
                                setCurrentPage={setCurrentPage}
                                setUsers={setUsers}
                                currentPage={currentPage}
                                totalCountPage={totalCountPage}
                                isFetching={isFetching}
                                setIsFetching={setIsFetching}/>
                </div>
                <div className={s.users}>{
                    users.map(u => <User key={u.id}
                                         name={u.name}
                                         followed={u.followed}
                                         follow={follow}
                                         unfollow={unfollow}
                                         id={u.id}
                                         photos = {u.photos}
                                         toggleFollowingInProgress={toggleFollowingInProgress}
                                         followingInProgress = {followingInProgress}

                    />)}
                </div>
            </div>
            }
        </>
    )
}


export default Users