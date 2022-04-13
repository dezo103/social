import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {dialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    updateNewMessageBody: (text: string) => void
    dialogsPage: dialogsPageType
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage(state.newMessageBody)
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewMessageBody(text)
    }

   if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}>i</textarea>
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs
