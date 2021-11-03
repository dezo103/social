import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: DialogsDataType
    messages: MessagesType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea ref={ newMessageElement }></textarea>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs
