import UserStatus from "./UserStatus/UserStatus";
import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import s from './Profile.module.css'
import {ProfilePageType} from "../../../redux/profileReduser";
import PostsContainer from "./Posts/PostsContainer";

type ProfilePropsType = {
    store: any
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.profile}>
            <UserStatus/>
            <AboutMe/>
            <hr/>
            <br/>
            <PostsContainer store={props.store}/>
        </div>
    )
}
export default Profile