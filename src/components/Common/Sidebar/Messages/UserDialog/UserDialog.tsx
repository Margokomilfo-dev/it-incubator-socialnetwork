import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../Messages.module.css";


type UserDialogPropsType = {
    id: number
    name: string
}
function UserDialog(props:UserDialogPropsType) {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


export default UserDialog