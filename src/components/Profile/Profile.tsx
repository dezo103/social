import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postDataType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/redux-store";

type ProfilePostType = {
    // postData: postDataType
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: RootStateType
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}/>
            {/*<MyPosts postData={props.postData}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;
