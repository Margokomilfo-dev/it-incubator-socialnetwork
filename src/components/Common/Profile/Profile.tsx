import UserStatus from "./UserStatus/UserStatus";
import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Posts from "./Posts/Posts";
import s from './Profile.module.css'
import {PostsType, ProfilePageType, StateType} from "../../../redux/redux";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: Object) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.profile}>
            <UserStatus/>
            <AboutMe/>
            <hr/>
            <br/>
            <Posts profilePage={props.profilePage}
                   dispatch = {props.dispatch}/>
        </div>
    )
}
export default Profile