import React, {useState} from "react"
import {UserType} from "../../../../redux/allUsersReduser"
import s from './Users.module.css'
import axios from 'axios'
import noPhoto from '../../../../img/noPhoto.png'

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${currentPage}`).then(response => {
        setUsers(response.data.items)
        setUsersCount(response.data.totalCount)
    })
//-----------------------------------------------------
    let totalCountPage = Math.ceil(totalCountUsers / 15)

    let totalCountPageArr = []
    for (let i = 1; i <= totalCountPage; i++) {
        totalCountPageArr.push(i)
    }

    return (
        <div className={s.usersStyle}>
            <div className={s.users}>{
                users.map(u => <User name={u.name} followed={u.followed} follow={follow} unfollow={unfollow}
                                     id={u.id}/>)}
            </div>
            <Pagination totalCountPageArr={totalCountPageArr} setCurrentPage={setCurrentPage} setUsers={setUsers} currentPage={currentPage}/>
        </div>

    )
}

type UserPropsType = {
    name: string
    followed: boolean
    follow: (id: string) => void
    unfollow: (id: string) => void
    id: string

}
const User: React.FC<UserPropsType> = ({name, followed, follow, unfollow, id}) => {
    return (
        <div className={s.user}>
            <div className={s.photo}>
                <img src={noPhoto} alt="" className={s.src}/>
            </div>
            <div className={s.name}>{name}</div>
            <div>
                {followed ? <button onClick={() => {
                    follow(id)
                }}>Follow</button> : <button onClick={() => {
                    unfollow(id)
                }}>Unfollow</button>}
            </div>
        </div>
    )
}


type PaginationPropsType = {
    totalCountPageArr: Array<number>
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page:number) => void
    currentPage: number
}

const Pagination: React.FC<PaginationPropsType> = ({totalCountPageArr, setUsers, setCurrentPage, currentPage}) => {

    let onChangeCurrentPage = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${page}`).then(response => {
            setUsers(response.data.items)
        })
        setCurrentPage(page)
    }

    return (
        <div className={s.pagination}>
            {
                totalCountPageArr.map(p => {
                    // @ts-ignore
                    return <span className={currentPage === p ? s.currentPage : s.uncurrenPage} onClick={() => {
                        onChangeCurrentPage(p)
                    }}>{p}</span>
                })
            }
        </div>
    )

}
export default Users