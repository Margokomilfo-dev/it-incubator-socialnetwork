import React from 'react'
import './App.css'
import s from "./App.module.css"
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"
import {BrowserRouter, Route} from "react-router-dom"
import Sidebar from "./components/Common/Sidebar/Sidebar"
import Users from "./components/Common/Sidebar/Users/Users"
import About from "./components/Common/Sidebar/About/About"
import Profile from "./components/Common/Profile/Profile"
import MessagesContainer from './components/Common/Sidebar/Messages/MessagesContainer'

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
                        <Route path={'/profile'} render={() =>
                            <Profile />}/>
                        <Route path={'/users'} render={() => <Users/>}/>
                        <Route path={'/dialogs'} render={() =>
                            <MessagesContainer store={props.store}/>}/>
                        <Route path={'/about'} render={() => <About/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
