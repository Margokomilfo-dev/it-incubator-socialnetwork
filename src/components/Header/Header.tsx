import s from "./Header.module.css"
import logo from "../../img/logo-job.png"
import React from "react"
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux/profileReduser";

type HeaderPropsType = {
    isLogin: boolean
}
 const Header: React.FC<HeaderPropsType> = ({isLogin}) => {
    debugger
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
                    {isLogin
                        ?
                        <div className={s.logout}>
                            <img className={s.loginImg} alt="photo"/>
                            <button className='logButton'>
                                <NavLink to={'/login'}>LogOut</NavLink>
                            </button>
                        </div>
                        :
                        <div className={s.logIn}>
                            <button className='logButton'>
                                <NavLink to={'/login'} >LogIn</NavLink>
                            </button>
                        </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default Header
