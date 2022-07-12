import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends React.Component<any, any> {

    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandleedrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandleedrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path={'/profile/:userId?'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/profile'}/>
                    }}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <Login/>
                        </React.Suspense>
                    }}/>
                    {/*<Route exact path={'*'} render={() => <div>404 not found</div>}/>*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = (props: any) => {
    return <HashRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </HashRouter>
        }

export default SamuraiJSApp

