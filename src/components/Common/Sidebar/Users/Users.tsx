import React, {useState} from "react"
import {UserType} from "../../../../redux/allUsersReduser"
import s from './Users.module.css'
import axios from 'axios'
import Pagination from "../Pagination/Pagination"
import User from "./User"

type UsersPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
    setUsersCount: (totalCount: number) => void
    totalCountUsers: number
}


const Users: React.FC<UsersPropsType> = ({follow, unfollow, setUsers, users, setUsersCount, totalCountUsers}) => {

    let [currentPage, setCurrentPage] = useState<number>(1)

//----------------axios-------------------------------
    !users.length &&
    //count, page
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=24&page=${currentPage}`).then(response => {
        setUsers(response.data.items)
        setUsersCount(response.data.totalCount)
    })
//-----------------------------------------------------
    let totalCountPage = Math.ceil(totalCountUsers / 15)

    let totalCountPageArr = []
    for (let i = 1; i <= totalCountPage - 300; i++) {
        totalCountPageArr.push(i)
    }

    return (
        <div className={s.usersStyle}>
            <div className={s.pagination}>
                <Pagination totalCountPageArr={totalCountPageArr}
                            setCurrentPage={setCurrentPage}
                            setUsers={setUsers}
                            currentPage={currentPage}
                            totalCountPage={totalCountPage}/>
            </div>
            <div className={s.users}>{
                users.map(u => <User name={u.name}
                                     followed={u.followed}
                                     follow={follow}
                                     unfollow={unfollow}
                                     id={u.id}/>)}
            </div>
        </div>

    )
}



export default Users