import {Dispatch} from "redux";
import {authAPI, secutityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

let InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

type InitialStateType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean,
    captchaUrl: any
}

export const authReducer = (state: InitialStateType = InitialState, action: any) => {
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

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => ({
    type: 'samurai-network/auth/SET_USER_DATA',
    payload: {userId, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
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
                : "Some error"
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
    //         : "Some error"
    //     dispatch(stopSubmit('login', {_error: message}))
    // }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.logout()

    if (response.data.resultCode == 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}