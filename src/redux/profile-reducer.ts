import {ActionsTypes, PostType, profilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/api";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

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
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const savePhotoSuccess = (photos: Array<any>) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)


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
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: any) => async (dispatch: Dispatch<any>, getState:() => AppStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(response.data.messages[0])
    }
}
export default profileReducer
