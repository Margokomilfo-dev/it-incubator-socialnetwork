import React from "react"
import s from "./Users.module.css"
import noPhoto from "../../../../img/noPhoto.png"
import { NavLink } from "react-router-dom"

type UserPropsType = {
    name: string
    followed: boolean
    follow: (id: string) => void
    unfollow: (id: string) => void
    id: string
    photos: any

}
const User: React.FC<UserPropsType> = ({name, followed, follow, unfollow, id, photos}) => {
    return (
        <div className={s.user}>
            <div className={s.photo}>
                <NavLink to={'/profile/' + id}>
                    {!photos.small ?  <img  src={noPhoto} alt="" className={s.src}/> : <img  src={photos.small} alt="" className={s.src}/>}
                </NavLink>

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

export default User