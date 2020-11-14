import React, {useEffect} from 'react'
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
import {MessagesContainer} from "./components/Common/Sidebar/Messages/MessagesContainer";
import Login from "./components/Login/Login"
import {connect, MapStateToProps} from "react-redux";
import {AllAppTypes} from "./redux/redux-store";
import {initializedApp, initializedAppAC} from "./redux/reducers/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


type MapStateToPropsType = {
    initializedSuccess: boolean
}
type MapDispatchToPropsType = {
    initializedAppAC: () => void
}
type AppPropsType = {
    store: Store
}

function App(props: AppPropsType & MapStateToPropsType & MapDispatchToPropsType) {
    //dvdfv
    useEffect(()=>{
        props.initializedAppAC()
    },[props.initializedSuccess])

    if (!props.initializedSuccess){
        return <Preloader />
    }

    return (
        <BrowserRouter>
            <div className='app'>
                <HeaderContainer />
                <StatusContainer/>
                <div className={s.common}>
                    <Sidebar/>
                    <div className={s.main}>
                        <Route exact path={'/'} render={() => <ProfileContainer/>}/>
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
let mapStateToProps = (state: AllAppTypes): MapStateToPropsType => ({
    initializedSuccess: state.app.initializedSuccess
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, AppPropsType, AllAppTypes>(mapStateToProps, {initializedAppAC})(App)
