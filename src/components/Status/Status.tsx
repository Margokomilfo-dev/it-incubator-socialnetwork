import s from "./Status.module.css";
import React from "react";

function Status() {
    return (
        <div className={s.status}>
            <div className={s.status_content}>
                {/*<div className={s.online}>Online</div>*/}
                <div className={s.offline}>Offline...</div></div>
        </div>
    )
}

export default Status
