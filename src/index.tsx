import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import store from "./redux/redux-store";

export let rerenderIntareTree = (state: any) => {

debugger
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

rerenderIntareTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderIntareTree(state)
});