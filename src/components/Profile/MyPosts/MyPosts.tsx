import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";

type MyPostsPropsType =  {
    postData: postDataType
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
