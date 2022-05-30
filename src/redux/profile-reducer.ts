import {ActionsTypes, PostType, profilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/api";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

const initialState: profilePageType = {
    postData: [
        {id: 1, message: "Hi hi hi", likesCount: 12},
        {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id != action.id )}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)


export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer
