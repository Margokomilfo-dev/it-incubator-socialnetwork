import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import store from "./redux/redux";

export let rerenderIntareTree = () => {


    ReactDOM.render(
        // @ts-ignore
        <App store={store} dispatch = {store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

// @ts-ignore
rerenderIntareTree()

store.subscribe(rerenderIntareTree)