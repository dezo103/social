import {Dispatch} from 'redux';
import {authAPI, secutityAPI} from '../API/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

let InitialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof InitialState

export const authReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export type setAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: 'samurai-network/auth/SET_USER_DATA',
    payload: {userId, email, login, isAuth}
})

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS',
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        // response code 1
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        } else {
            let message = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<any>) => {
    const response = await secutityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

    // if (response.data.url == 0) {
    //     dispatch(getAuthUserData())
    // } else {
    //     let message = response.data.messages.length > 0
    //         ? response.data.messages[0]
    //         : 'Some error'
    //     dispatch(stopSubmit('login', {_error: message}))
    // }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.logout()

    if (response.data.resultCode == 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}