import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {dialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

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


    const addNewMessage = (values: addMessageFormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

   if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


type addMessageFormDataType = {
    newMessageBody: string
}

export const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<addMessageFormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newMessageBody"
                   validate={[required, maxLength50]}
                   placeholder="Enter message"/>
            <button>add message</button>
        </form>
    );
};

const AddMessageReduxForm = reduxForm<addMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs
