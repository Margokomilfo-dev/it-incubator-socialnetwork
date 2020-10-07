import s from "./Sidebar.module.css"
import React from "react"
// import mainPhoto from "../../../img/mainPhoto.jpg"
import {NavLink} from "react-router-dom"

function Sidebar() {
    return (
        <div className={s.common}>
            <div className={s.sidebar}>
                {/*<div className={s.user_photo}>*/}
                {/*    <img className={s.user_photo_img} src={mainPhoto} alt="user_photo"/>*/}
                {/*    <button className='photoButton'>Change photo</button>*/}
                {/*</div>*/}

                <div className={s.case}>
                    <NavLink to={'/profile'} className={s.case_link}
                             activeClassName={s.activeLink}>My profile </NavLink></div>
                <div className={s.case}>
                    <NavLink to={'/users'} className={s.case_link}
                             activeClassName={s.activeLink} >All users</NavLink></div>
                <div className={s.case}>
                    <NavLink to={'/dialogs'} className={s.case_link}
                             activeClassName={s.activeLink}>Messages</NavLink ></div>
                <div className={s.case}>
                    <NavLink to={'/about'} className={s.case_link}
                             activeClassName={s.activeLink}>About Project</NavLink></div>
            </div>
        </div>
    )
}

export default Sidebar
