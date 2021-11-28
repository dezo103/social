// import {RootStateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/state'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App postData={store.getState().profilePage.postData}
                     dialogsData={store.getState().dialogsPage.dialogsData}
                     messages={store.getState().dialogsPage.messages}
                     newPostText={store.getState().profilePage.newPostText}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addPost={store.addPost.bind(store)}
                    />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
