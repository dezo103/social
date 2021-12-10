import {ActionsTypes, dialogsPageType, MessageType} from "./store";

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState: dialogsPageType = {
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
    newMessageBody: ''
}

const dialogsReducer = (state:dialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            return state
        default:
            return state
    }
}

export const sendMessageAC  = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    }as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}


export default dialogsReducer
