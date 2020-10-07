import React from 'react'
import preloader from '../../../img/preloader.svg'
import s from './Preloader.module.css'



function Preloader () {
    return (
        <div className={s.preloader}>
            <div>
                <img src={preloader} alt="" className={s.img}/>
            </div>
        </div>
    )
}

export default Preloader