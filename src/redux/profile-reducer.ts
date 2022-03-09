import {ActionsTypes, PostType, profilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPosTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState: profilePageType = {
    postData: [
        {id: 1, message: "Hi hi hi", likesCount: 12},
        {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state:profilePageType = initialState , action: ActionsTypes) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }
            case SET_USER_PROFILE:
                return {...state, profile: action.profile}
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

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)


export default profileReducer
