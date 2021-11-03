import {RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App postData={state.profilePage.postData}
                     dialogsData={state.dialogsPage.dialogsData}
                     messages={state.dialogsPage.messages}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
