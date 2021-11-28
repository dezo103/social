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
export type addPostType = () => void
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
}

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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }
}

export default store
