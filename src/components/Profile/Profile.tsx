import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";

type ProfilePostType = {
    postData: postDataType
    addPostCallback: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={props.addPostCallback}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;
