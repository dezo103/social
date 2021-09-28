import s from "./Message.module.css";
import React from "react";

type MessageType = {
    message: string
}
const Message = (props:MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message
