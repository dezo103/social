import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: number
}
const DialogItem = (props: DialogsItemType) => {

    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}
const Message = (props:MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Artem" id={2}/>
                <DialogItem name="Sanya" id={3}/>
                <DialogItem name="Julia" id={4}/>
                <DialogItem name="Losara" id={5}/>
                <DialogItem name="Jane" id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
}

export default Dialogs
