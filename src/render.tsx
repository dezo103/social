import {RootStateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state from './redux/state' //changed

// export const rerenderEntireTree = (state: RootStateType) => {
export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App postData={state.profilePage.postData}
                     dialogsData={state.dialogsPage.dialogsData}
                     messages={state.dialogsPage.messages}
                     newPostText={state.profilePage.newPostText}
                     updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
