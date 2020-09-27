import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import store from "./redux/redux-store";

export let rerenderIntareTree = (state: any) => {

debugger
    ReactDOM.render(
        // @ts-ignore
        <App state={state} dispatch = {store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

// @ts-ignore
rerenderIntareTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderIntareTree(state)
});