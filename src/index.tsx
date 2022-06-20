import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import App from "./App";
import SamuraiJSApp from "./App";


export const rerenderEntireTree = () => {
    console.log(store.getState())
    ReactDOM.render(
        <React.StrictMode>
            <SamuraiJSApp />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
