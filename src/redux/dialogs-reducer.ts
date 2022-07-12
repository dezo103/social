import {ActionsTypes} from './store';

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Julia'},
        {id: 5, name: 'Losara'},
        {id: 6, name: 'Jane'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

type sendMessageACActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageAC  = (newMessageBody: string): sendMessageACActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}

export default dialogsReducer
