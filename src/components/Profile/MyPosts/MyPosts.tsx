import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='hello? how are you&'/>
                <Post message="hi? Happy birthday"/>
                <Post message="goodbye? my friend"/>
                <Post message="I am good"/>
                <Post message="cryptocurrency - is the best investment"/>
            </div>
        </div>
    )
}

export default MyPosts;
