import React from "react"
import s from "./Users.module.css"
import noPhoto from "../../../../img/noPhoto.png"
import {NavLink} from "react-router-dom"
import axios from "axios";
import {UsersApi} from "../../../../redux/api";

type UserPropsType = {
    name: string
    followed: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    id: number
    photos: any
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}
const User: React.FC<UserPropsType> = ({name, followed, follow, unfollow, id, photos,
                                           toggleFollowingInProgress, followingInProgress}) => {


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
                              onClick={() => {
                                  toggleFollowingInProgress(true, id)
                        UsersApi.unfollow(id).then(response => {
                            response.resultCode === 0 && unfollow(id)
                            toggleFollowingInProgress(false, id)
                        })

                    }}>Unfollow</button>

                    : <button  disabled={followingInProgress.some(userId => userId === id)}
                               onClick={() => {toggleFollowingInProgress(true, id)
                        UsersApi.follow(id).then(response => {
                            response.resultCode === 0 && follow(id)
                            toggleFollowingInProgress(false, id)
                        })

                    }}>Follow</button>}
            </div>
        </div>
    )
}

export default User