import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "hello? how are you&", likesCount: 12},
        {id: 3, message: "goodbye? my friend", likesCount: 12},
        {id: 4, message: "I am good", likesCount: 12},
        {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
    ]

    let postsElements = postData.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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
