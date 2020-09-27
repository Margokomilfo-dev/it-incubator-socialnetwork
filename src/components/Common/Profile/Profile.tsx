import UserStatus from "./UserStatus/UserStatus";
import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import s from './Profile.module.css'
import {ProfilePageType} from "../../../redux/profileReduser";
import PostsContainer from "./Posts/PostsContainer";


function Profile() {
    return (
        <div className={s.profile}>
            <UserStatus/>
            <AboutMe/>
            <hr/>
            <br/>
            <PostsContainer />
        </div>
    )
}
export default Profile