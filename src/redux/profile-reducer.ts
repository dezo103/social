import {ActionsTypes, PostType, profilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPosTextAC>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state:profilePageType , action: ActionsTypes) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ""
            return state
        default:
            return state
    }
}

export const addPostAC  = () => ({type: ADD_POST}as const)
export const updateNewPosTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer
