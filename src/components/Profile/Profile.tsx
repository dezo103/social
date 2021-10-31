import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";


type ProfilePostType = {
    postData: postDataType
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;
