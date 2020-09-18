import s from "./Header.module.css";
import logo from "../../img/logo-job.png";
import React from "react";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>
                <a href="#"><img className={s.header_img} src={logo} alt="logo"/></a>
            </div>
            <div className={s.header_content}>
                <div className={s.header_content_header}>Welcome to the <span>SocialWorkNetwork</span>!</div>
                <div className={s.header_content_content}>
                    We'll help you looking for a job! <br/>
                    <span>Join and have a nice day =)</span>
                </div>
            </div>
            <div className={s.header_search}>
                <input className={s.header_input} placeholder="Search..."/>
            </div>
            <div className={s.header_log}>
                <div className={s.login}>
                    <button className='logButton'>LogIn</button>
                </div>
                <div className={s.logout}>
                    <button className='logButton'>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default Header
