import {ActionsTypes} from './store';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../API/api';
import {AppStateType} from './redux-store';
import {stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType} from "../types/types";

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


// export type ProfilePageType = {
//     postData: PostDataType
//     profile: ProfileType
//     status: string
// }

export type PostDataType = Array<PostType>

const initialState = {
    postData: [
        {id: 1, message: 'Hi hi hi', likesCount: 12},
        {id: 5, message: 'cryptocurency - is the best investment', likesCount: 12},
    ] as PostDataType,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id != action.id )}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

type AddPostACActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostAC = (newPostText: string): AddPostACActionType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

// type SetUserProfileActionType = {
//     type: typeof SET_USER_PROFILE
//     profile: ProfileType
// }
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

// type SetStatusActionType = {
//     type: typeof SET_STATUS
//     status: string
// }
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

// type DeletePostActionType = {
//     type: typeof DELETE_POST
//     id: number
// }
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)


export const getUserProfile = (userId: number | null) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    catch(error) {
        console.error(error)
    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: Dispatch<any>, getState:() => AppStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(response.data.messages[0])
    }
}
export default profileReducer
