import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {
    ActionsTypes,
    DialogsDataType, dialogsPageType,
    MessagesType,
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";

type DialogsPropsType = {
    // dialogsData: DialogsDataType
    // messages: MessagesType
    // newMessageBody: string
    //dispatch: (action: ActionsTypes) => void
    // store: RootStateType
    updateNewMessageBody: (text: string) => void
    dialogsPage: dialogsPageType
    sendMessage: (newMessageBody: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    // let onSendMessageClick = () => {
    //    props.dispatch(sendMessageAC(props.newMessageBody))
    // }
    // let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    // }

    const onSendMessageClick = () => {
        props.sendMessage(state.newMessageBody)
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewMessageBody(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}>i</textarea>
                <button onClick={ onSendMessageClick }>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs
