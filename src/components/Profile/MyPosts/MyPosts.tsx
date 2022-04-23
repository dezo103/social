import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    //updateNewPostText: (text: string) => void
    postData: postDataType
    //newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = (values: addNewPostFormDataType) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


type addNewPostFormDataType = {
    newPostText: string
}

export const AddNewPostsForm: React.FC<InjectedFormProps<addNewPostFormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText"/>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm<addNewPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostsForm)


export default MyPosts;

