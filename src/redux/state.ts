export type PostType = {
    id:number
    message: string
    likesCount: number
}
export type postDataType = Array<PostType>
export type profilePageType = {
    postData: postDataType
    newPostText: string
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
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

const store: StoreType = {
    _state: {
    profilePage: {
        postData: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "hello? how are you&", likesCount: 12},
            {id: 3, message: "goodbye? my friend", likesCount: 12},
            {id: 4, message: "I am good", likesCount: 12},
            {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
        ],
        newPostText: ''
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
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ]
    },
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

    dispatch(action) {
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ""
            this._onChange()
        }
    }
}

export default store
