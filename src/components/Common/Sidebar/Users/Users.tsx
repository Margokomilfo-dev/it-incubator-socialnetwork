import React, {useEffect, useState} from "react"
import {UserType} from "../../../../redux/reducers/allUsersReduser"
import s from './Users.module.css'
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
    followingInProgress: Array<number>
    isLogin: boolean
}


const Users: React.FC<UsersPropsType> = ({follow, unfollow, setUsers, users,
                                             setUsersCount, totalCountUsers,
                                             followingInProgress, isLogin}) => {


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
                                         followingInProgress = {followingInProgress}
                                         isLogin={isLogin}

                    />)}
                </div>
            </div>
            }
        </>
    )
}


export default Users