import React from "react"
import s from '../Messages.module.css'

type MessagePropsType = {
    message: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.messageField}>
            {props.message}
        </div>
    )
}


export default Message