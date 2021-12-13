import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {
    ActionsTypes,
    DialogsDataType,
    MessagesType,
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";

type DialogsPropsType = {
    dialogsData: DialogsDataType
    messages: MessagesType
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
    store: RootStateType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
       props.dispatch(sendMessageAC(props.newMessageBody))
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
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
