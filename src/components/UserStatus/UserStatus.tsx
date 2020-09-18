import s from "./UserStatus.module.css";
import React from "react";

function UserStatus() {
    return (
        <div className={s.status}>
            <textarea className={s.textarea_status}
                      placeholder='status'> I'm looking for a job =)
            </textarea>
        </div>
    )
}

export default UserStatus
