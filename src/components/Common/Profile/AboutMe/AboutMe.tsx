import s from "./AboutMe.module.css";
import React from "react";

function AboutMe() {
    return (
        <div className={s.aboutMe}>
            <div className={s.aboutMe_header}>About me:</div>
            <div className={s.aboutMe_content}>a lot of information...</div>
        </div>
    )
}

export default AboutMe
