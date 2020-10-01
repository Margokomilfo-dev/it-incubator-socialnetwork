import React from "react"
import {UserType} from "../../../../redux/allUsersReduser"
import s from './Users.module.css'
import axios from 'axios'
import noPhoto from '../../../../img/noPhoto.png'

type UsersPropsType = {
    follow: (id: string)=> void
    unfollow: (id: string)=> void
    setUsers: (users: Array<UserType>)=> void
    users: Array<UserType>
}


const Users: React.FC<UsersPropsType> = ({follow, unfollow, setUsers, users}) => {

    !users.length &&
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
       setUsers(response.data.items)
    })

    return (
        <div className={s.usersStyle}>
            <div className={s.users}>{users.map(u => <User name={u.name}  followed={u.followed}  />)}</div>
        </div>
    )
}

type UserPropsType = {
    name: string
    followed: boolean

}
const User: React.FC<UserPropsType> = ({name, followed}) => {
    return (
        <div className={s.user}>
            <div className={s.photo}>
                <img src={noPhoto} alt="" className={s.src}/>
            </div>
            <div className={s.name}>{name}</div>
            <div>
                {followed ? <button>Unfollow</button> : <button>Follow</button>}
            </div>

        </div>
    )
}
export default Users