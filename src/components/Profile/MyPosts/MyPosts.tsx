import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType} from "../../../redux/store";


type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    postData: postDataType
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

   const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
   }

   const addPost = () => {
       props.addPost(props.newPostText)
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

