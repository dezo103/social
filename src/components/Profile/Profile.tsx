import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";


type ProfilePostType = {
    postData: postDataType
    addPostCallback: (postText: string) => void
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
            addPost={props.addPostCallback}/>
        </div>
    )
}

export default Profile;
