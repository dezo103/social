import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";

type MyPostsPropsType =  {
    postData: postDataType
    addPost: (postText: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value=""
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
