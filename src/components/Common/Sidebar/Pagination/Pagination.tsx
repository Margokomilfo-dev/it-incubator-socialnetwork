import {UserType} from "../../../../redux/allUsersReduser"
import React from "react"
import axios from "axios"
import s from "../Users/Users.module.css"

type PaginationPropsType = {
    totalCountPageArr: Array<number>
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page:number) => void
    currentPage: number
}

const Pagination: React.FC<PaginationPropsType> = ({totalCountPageArr, setUsers, setCurrentPage, currentPage}) => {

    let onChangeCurrentPage = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=24&page=${page}`).then(response => {
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


export default Pagination