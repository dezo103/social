import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsDataType, MessagesType, postDataType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState();
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsData = {state.dialogsPage.dialogsData}
                                                                     messages = {state.dialogsPage.messages}/> }/>
                    <Route path={'/profile'} render={ () => <Profile postData={state.profilePage.postData}
                                                                     addPostCallback={props.store.addPost.bind(props.store)}
                                                                     newPostText={state.profilePage.newPostText}
                                                                     updateNewPostText={props.store.updateNewPostText.bind(props.store)}/> }/>
                    <Route path={'/news'} render={ () => <News /> }/>
                    <Route path={'/music'} render={ () => <Music /> }/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>
                </div>
            </div>
    )
};

export default App;


