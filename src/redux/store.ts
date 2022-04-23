import dialogsReducer, {SendMessageActionType} from "./dialogs-reducer";
import profileReducer, {
    AddPostActionType, SetStatusActionType,
    SetUserProfileActionType,
} from "./profile-reducer";

export type PostType = {
    id:number
    message: string
    likesCount: number
}
export type postDataType = Array<PostType>
export type profilePageType = {
    postData: postDataType
    profile: any
    status: string
}
export type DialogType = {
    id: number
    name: string
}
export type DialogsDataType = Array<DialogType>
export type MessageType = {
    id: number
    message: string
}
export type MessagesType = Array<MessageType>
export type dialogsPageType = {
    dialogsData: DialogsDataType
    messages: MessagesType
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action:ActionsTypes) => void
}

export type ActionsTypes =
    AddPostActionType |
    SendMessageActionType |
    SetUserProfileActionType |
    SetStatusActionType

const store: StoreType = {
    _state: {
    profilePage: {
        postData: [
            {id: 1, message: "Hi hi hi", likesCount: 12},
            {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
        ],
        profile: null,
        status: ""
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Artem"},
            {id: 3, name: "Sanya"},
            {id: 4, name: "Julia"},
            {id: 5, name: "Losara"},
            {id: 6, name: "Jane"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"}
        ],
    }
},
    _onChange() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}

export default store
