<<<<<<< HEAD
import {UserType} from "../../../../redux/allUsersReduser";
import React, {useState} from "react";
import axios from "axios";
import s from "../Users/Users.module.css";
=======
import {UserType} from "../../../../redux/allUsersReduser"
import React from "react"
import axios from "axios"
import s from "../Users/Users.module.css"
>>>>>>> master

type PaginationPropsType = {
    totalCountPageArr: Array<number>
    setUsers: (users: Array<UserType>) => void
<<<<<<< HEAD
    setCurrentPage: (page: number) => void
    currentPage: number
    totalCountPage: number
}

const Pagination: React.FC<PaginationPropsType> = ({totalCountPageArr, setUsers, setCurrentPage, currentPage, totalCountPage}) => {
=======
    setCurrentPage: (page:number) => void
    currentPage: number
}

const Pagination: React.FC<PaginationPropsType> = ({totalCountPageArr, setUsers, setCurrentPage, currentPage}) => {
>>>>>>> master

    let onChangeCurrentPage = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=24&page=${page}`).then(response => {
            setUsers(response.data.items)
        })
        setCurrentPage(page)
    }

<<<<<<< HEAD
    let portionSize = 20
    let portionCount = Math.ceil(totalCountPage/portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let onPrevBtn = () => {setPortionNumber(portionNumber - 1)}
    let onNextBtn = () => {setPortionNumber(portionNumber + 1)}
    return (
        <>
            {portionNumber > 1 && <button onClick={onPrevBtn}>PREV</button>}
            {totalCountPageArr
                .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={currentPage === p ? s.currentPage : s.uncurrenPage} onClick={() => {
                        onChangeCurrentPage(p)
                    }}>{p}</span>
                })}
            {portionCount > portionNumber && <button onClick={onNextBtn}>NEXT</button>}
        </>
=======
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
>>>>>>> master
    )

}

<<<<<<< HEAD
=======

>>>>>>> master
export default Pagination