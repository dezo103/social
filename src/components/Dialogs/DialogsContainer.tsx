import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {DialogsDataType, MessagesType} from "../../redux/store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type dialogsPageType = {
    dialogsData: DialogsDataType
    messages: MessagesType
    newMessageBody: string
}

type MapStatePropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}

type mapDispatchPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (text) => {dispatch(updateNewMessageBodyAC(text))},
        sendMessage: (newMessageBody) => {dispatch(sendMessageAC(newMessageBody))}
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
