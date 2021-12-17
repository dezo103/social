import {ActionsTypes, PostType, profilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPosTextAC>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: profilePageType = {
    postData: [
        {id: 1, message: "Hi hi hi", likesCount: 12},
        {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
    ],
    newPostText: ''
}

const profileReducer = (state:profilePageType = initialState , action: ActionsTypes) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postData = [...stateCopy.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC  = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }as const
}
export const updateNewPosTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer
