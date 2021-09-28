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

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Artem"},
        {id: 3, name: "Sanya"},
        {id: 4, name: "Julia"},
        {id: 5, name: "Losara"},
        {id: 6, name: "Jane"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messagesElements }

            </div>
        </div>
    )
}

export default Dialogs
