import React from 'react'
import './App.css'
import s from "./App.module.css"
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"
import {BrowserRouter, Route} from "react-router-dom"
import Sidebar from "./components/Common/Sidebar/Sidebar"
import Users from "./components/Common/Sidebar/Users/Users"
import Messages from "./components/Common/Sidebar/Messages/Messages"
import About from "./components/Common/Sidebar/About/About"
import Profile from "./components/Common/Profile/Profile"

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Status/>
                <div className={s.common}>
                    <Sidebar />
                    <div className={s.main}>
                        <Route component={Profile} path={'/profile'}/>
                        <Route component={Users} path={'/users'}/>
                        <Route component={Messages} path={'/messages'}/>
                        <Route component={About} path={'/about'}/>
                    </div>>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
