import UserStatus from "../../UserStatus/UserStatus";
import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Posts from "./Posts/Posts";

function Profile() {
    return (
        <div>
            <UserStatus/>
            <AboutMe/>
            <hr/>
            <br/>
            <Posts/>
        </div>
    )
}
export default Profile