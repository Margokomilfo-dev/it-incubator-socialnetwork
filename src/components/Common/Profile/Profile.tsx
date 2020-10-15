import UserStatus from "./UserStatus/UserStatus"
import React from "react"
import AboutMe from "./AboutMe/AboutMe"
import s from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer"
import {ProfileType, setProfile} from "../../../redux/profileReduser"
import Preloader from "../Preloader/Preloader"

type ProfileProps = {
    profile: ProfileType | null
}

let Profile = (props:ProfileProps) => {

    return (
        props.profile === null ? <Preloader/> :
        <div className={s.profile}>
            <div  className={s.profileTopBlock}>
                <div className={s.profilePhoto}>
                    <img src={props.profile.photos.large} alt=""/>
                    <button className='photoButton'>Change photo</button>
                </div>
                <div  className={s.profileInfo}>
                    <div className={s.fullName}>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    <UserStatus/>
                    <AboutMe  profile = {props.profile}/>
                </div>
            </div>

            <PostsContainer />
        </div>
    )
}

export default Profile