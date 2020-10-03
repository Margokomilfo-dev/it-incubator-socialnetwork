import React from "react"
import s from "./Users.module.css"
import noPhoto from "../../../../img/noPhoto.png"

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

export default User