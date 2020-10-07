import React from 'react'
import './App.css'
import s from "./App.module.css"
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"
import {BrowserRouter, Route} from "react-router-dom"
import Sidebar from "./components/Common/Sidebar/Sidebar"
import About from "./components/Common/Sidebar/About/About"
import { UsersContainer } from './components/Common/Sidebar/Users/UsersContainer'
import ProfileContainer from "./components/Common/Profile/ProfileContainer"
import { MessagesContainer } from './components/Common/Sidebar/Messages/MessagesContainer'

type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Status/>
                <div className={s.common}>
                    <Sidebar/>
                    <div className={s.main}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer />}/>
                        <Route path={'/dialogs'} render={() => <MessagesContainer/>}/>
                        <Route path={'/about'} render={() => <About/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
