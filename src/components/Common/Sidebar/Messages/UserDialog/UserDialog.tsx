import React from 'react'
import {NavLink} from "react-router-dom"
import s from "../Messages.module.css"

type UserDialogPropsType = {
    id: string
    name: string
}
function UserDialog(props:UserDialogPropsType) {
    return (
        <div className={s.userBlock} >
                <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active} className={s.userName}>
                    <img src={`https://api.adorable.io/avatars/40/${props.name}.png`} className={s.userPhoto} alt=""/>
                    {props.name}
                </NavLink>
        </div>
    )
}


export default UserDialog