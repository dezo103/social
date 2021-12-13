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
import {RootStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: RootStateType
}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path={'/dialogs'} render={() => <Dialogs store={props.store}*/}
                {/*                                                dialogsData={state.dialogsPage.dialogsData}*/}
                {/*                                                messages={state.dialogsPage.messages}*/}
                {/*                                                newMessageBody={state.dialogsPage.newMessageBody}*/}
                {/*                                                dispatch={props.store.dispatch.bind(props.store)}*/}
                {/*                                                />*/}
                {/*}/>*/}
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}
                                                                // dialogsData={state.dialogsPage.dialogsData}
                                                                // messages={state.dialogsPage.messages}
                                                                // newMessageBody={state.dialogsPage.newMessageBody}
                                                                // dispatch={props.store.dispatch.bind(props.store)}
                />
                }/>
                <Route path={'/profile'} render={() => <Profile
                                                                // postData={state.profilePage.postData}
                                                                // dispatch={props.store.dispatch.bind(props.store)}
                                                                // newPostText={state.profilePage.newPostText}
                                                                store={props.store}
                                                                />
                }/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    )
};

export default App;


