import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

let InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = InitialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
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

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode == 0) {
        // response code 1
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode == 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.logout()

    if (response.data.resultCode == 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}