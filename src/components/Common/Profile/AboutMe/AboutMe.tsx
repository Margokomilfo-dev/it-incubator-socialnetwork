import s from "./AboutMe.module.css"
import React from "react"
import {ProfileType} from "../../../../redux/profileReduser";

type AboutMePropsType = {
    profile: ProfileType
}

function AboutMe(props: AboutMePropsType) {
    return (
        <div className={s.aboutMe}>
            <div className={s.aboutMe_header}>About me:</div>
            <div className={s.aboutMe_content}>a lot of information... </div>

</div>
    )
}

export default AboutMe
