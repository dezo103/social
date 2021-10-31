export type PostType = {
    id:number
    message: string
    likesCount: number
}
export type postDataType = Array<PostType>
type profilePageType = {
    postData: postDataType
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
type dialogsPageType = {
    dialogsData: DialogsDataType
    messages: MessagesType
}

type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}


let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "hello? how are you&", likesCount: 12},
            {id: 3, message: "goodbye? my friend", likesCount: 12},
            {id: 4, message: "I am good", likesCount: 12},
            {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
        ]
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
}


// let stateee = {
//     postData: [
//         {id: 1, message: "Hi", likesCount: 12},
//         {id: 2, message: "hello? how are you&", likesCount: 12},
//         {id: 3, message: "goodbye? my friend", likesCount: 12},
//         {id: 4, message: "I am good", likesCount: 12},
//         {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
//     ],
//     dialogsData: [
//         {id: 1, name: "Dimych"},
//         {id: 2, name: "Artem"},
//         {id: 3, name: "Sanya"},
//         {id: 4, name: "Julia"},
//         {id: 5, name: "Losara"},
//         {id: 6, name: "Jane"},
//     ],
//     messages: [
//         {id: 1, message: "Hi"},
//         {id: 2, message: "How are you"},
//         {id: 3, message: "Yo"},
//         {id: 4, message: "Yo"},
//         {id: 5, message: "Yo"}
//     ]
//
// }


export default state
