import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postDataType, StoreType} from "../../redux/store";
import {RootStateType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfilePostType = {
//     store: RootStateType
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer store = {props.store}/>*/}
            <MyPostsContainer />
            {/*<MyPosts postData={props.postData}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;
