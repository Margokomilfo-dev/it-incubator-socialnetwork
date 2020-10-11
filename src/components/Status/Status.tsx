import s from "./Status.module.css"
import React from "react"

type StatusPropsType = {
    isLogin: boolean
}
const Status:React.FC<StatusPropsType> = (props: StatusPropsType) => {
    return (
        <div className={s.status}>
            <div className={s.status_content}>
                {props.isLogin
                    ? <div className={s.online}>Online...</div>
                    : <div className={s.offline}>Offline...</div>
                }
            </div>
        </div>
    )
}

export default Status
