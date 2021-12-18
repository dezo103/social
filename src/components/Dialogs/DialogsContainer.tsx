import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {DialogsDataType, MessagesType} from "../../redux/store";
import {Dispatch} from "redux";

export type dialogsPageType = {
    dialogsData: DialogsDataType
    messages: MessagesType
    newMessageBody: string
}

type MapStatePropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (text) => {dispatch(updateNewMessageBodyAC(text))},
        sendMessage: (newMessageBody) => {dispatch(sendMessageAC(newMessageBody))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
