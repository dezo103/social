import React, {ChangeEvent} from 'react';
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPosTextAC} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/redux-store";

type MyPostsContainer = {
    store: RootStateType
}


export const MyPostsContainer = (props: MyPostsContainer) => {
    const state = props.store.getState()
    let addPost = (newPostText: string) => {
        //props.dispatch(addPostAC())
        props.store.dispatch(addPostAC(newPostText))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPosTextAC(text))
    }

    return (
        <MyPosts addPost = {addPost}
                 updateNewPostText = {onPostChange}
                 postData = {state.profilePage.postData}
                 newPostText = {state.profilePage.newPostText}
        />
    );
};

