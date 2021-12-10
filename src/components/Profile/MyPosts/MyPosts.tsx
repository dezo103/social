import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, postDataType} from "../../../redux/state";
import {addPostAC, updateNewPosTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postData: postDataType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        //props.dispatch(addPostAC())
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPosTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
