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
import {DialogsDataType, MessagesType, postDataType} from "./redux/state";
import {addPost} from "./redux/state";


type AppPropsType = {
    postData: postDataType
    dialogsData: DialogsDataType
    messages: MessagesType
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsData = {props.dialogsData}
                                                                     messages = {props.messages}/> }/>
                    <Route path={'/profile'} render={ () => <Profile postData={props.postData}
                                                                     addPostCallback={addPost}
                                                                     newPostText={props.newPostText}
                                                                     updateNewPostText={props.updateNewPostText}/> }/>
                    <Route path={'/news'} render={ () => <News /> }/>
                    <Route path={'/music'} render={ () => <Music /> }/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>
                </div>
            </div>
    )
};

export default App;


