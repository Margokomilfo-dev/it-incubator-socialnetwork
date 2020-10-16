import React from 'react'
import './App.css'
import s from "./App.module.css"
import {BrowserRouter, Route} from "react-router-dom"
import Sidebar from "./components/Common/Sidebar/Sidebar"
import About from "./components/Common/Sidebar/About/About"
import { UsersContainer } from './components/Common/Sidebar/Users/UsersContainer'
import ProfileContainer from "./components/Common/Profile/ProfileContainer"
import StatusContainer from "./components/Status/StatusContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Store} from "redux";
import { Login } from './components/Login/Login'
import {MessagesContainer} from "./components/Common/Sidebar/Messages/MessagesContainer";

type AppPropsType = {
    store: Store
}

function App(props: AppPropsType) {
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className='app'>
                <HeaderContainer />
                <StatusContainer/>
                <div className={s.common}>
                    <Sidebar/>
                    <div className={s.main}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer />}/>
                        <Route path={'/dialogs'} render={() => <MessagesContainer />}/>
                        <Route path={'/about'} render={() => <About/>}/>
                        <Route path={'/login'} render={() => <Login />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
