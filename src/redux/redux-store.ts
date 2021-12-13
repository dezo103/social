import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store = createStore(reducers)

export type RootStateType = typeof store

export default store

//@ts-ignore
window.store=store

// console.log(store.getState())
