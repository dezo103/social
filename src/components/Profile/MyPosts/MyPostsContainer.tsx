import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPosTextAC} from "../../../redux/profile-reducer";
import {AppStateType, RootStateType} from "../../../redux/redux-store";
import {DialogsDataType, MessagesType, PostType} from "../../../redux/store";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

// type MyPostsContainer = {
//     store: RootStateType
// }
//
//
// export const MyPostsContainer = (props: MyPostsContainer) => {
//     const state = props.store.getState()
//     let addPost = (newPostText: string) => {
//         props.store.dispatch(addPostAC(newPostText))
//     }
//
//     let onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPosTextAC(text))
//     }
//
//     return (
//         <MyPosts addPost = {addPost}
//                  updateNewPostText = {onPostChange}
//                  postData = {state.profilePage.postData}
//                  newPostText = {state.profilePage.newPostText}
//         />
//     );
// };
//

export type postDataType = Array<PostType>

type MapStatePropsType = {
    postData: postDataType
    newPostText: string
}

type mapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}
// type mapDispatchPropsType = {
//     updateNewMessageBody: (text: string) => void
//     sendMessage: (newMessageBody: string) => void
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {dispatch(addPostAC(newPostText))},
        updateNewPostText: (text: string) => {
            dispatch(updateNewPosTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
