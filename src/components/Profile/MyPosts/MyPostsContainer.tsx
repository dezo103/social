import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "../../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

export type postDataType = Array<PostType>

type MapStatePropsType = {
    postData: postDataType
    //newPostText: string
}

type mapDispatchPropsType = {
    addPost: (newPostText: string) => void
    //updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postData: state.profilePage.postData,
        //newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {dispatch(addPostAC(newPostText))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
