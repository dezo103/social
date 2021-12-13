import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer)

export type RootStateType = typeof store

export default store

//@ts-ignore
window.store=store

// console.log(store.getState())
