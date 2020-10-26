import React from "react"
import s from "./Users.module.css"
import '../../../../App.css'
import noPhoto from "../../../../img/noPhoto.png"
import {NavLink} from "react-router-dom"

type UserPropsType = {
    name: string
    followed: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    id: number
    photos: any
    followingInProgress: Array<number>
}
const User: React.FC<UserPropsType> = ({name, followed, follow, unfollow, id, photos,
                                           followingInProgress}) => {


    return (
        <div className={s.user}>
            <div className={s.photo}>
                <NavLink to={'/profile/' + id}>
                    {!photos.small ? <img src={noPhoto} alt="" className={s.src}/> :
                        <img src={photos.small} alt="" className={s.src}/>}
                </NavLink>

            </div>
            <div className={s.name}>{name}</div>
            <div>
                {followed
                    ? <button disabled={followingInProgress.some(userId => userId === id)}
                              onClick={() => {unfollow(id)}} className='addUserBtn'>Unfollow</button>

                    : <button  disabled={followingInProgress.some(userId => userId === id)}
                               onClick={() =>{follow(id)}} className='addUserBtn'>Follow</button>}
            </div>
        </div>
    )
}

export default User