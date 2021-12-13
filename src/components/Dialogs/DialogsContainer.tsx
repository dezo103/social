import React, {ChangeEvent} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/redux-store";

type DialogsContainerType = {
    store: RootStateType
}

const DialogsContainer = (props: DialogsContainerType) => {
    const state = props.store.getState()

    let onSendMessageClick = (newMessageBody: string) => {
        props.store.dispatch(sendMessageAC(newMessageBody))
        // props.dispatch(sendMessageAC(props.newMessageBody))
    }
    let onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyAC(text))
    }


    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state.dialogsPage}/>);
};

export default DialogsContainer;
