import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export let rerenderIntareTree = (state: any) => {

    ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderIntareTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderIntareTree(state)
});