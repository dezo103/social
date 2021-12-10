import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postDataType} from "../../redux/store";
import store from "../../redux/redux-store";

type ProfilePostType = {
    postData: postDataType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
