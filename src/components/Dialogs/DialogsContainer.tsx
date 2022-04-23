import React, {ComponentType} from 'react';
import {sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {DialogsDataType, MessagesType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type dialogsPageType = {
    dialogsData: DialogsDataType
    messages: MessagesType
}

type MapStatePropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}

type mapDispatchPropsType = {
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
        sendMessage: (newMessageBody) => {dispatch(sendMessageAC(newMessageBody))}
    }
}

export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
