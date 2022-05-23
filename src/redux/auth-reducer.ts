import {Dispatch} from "redux";
import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA'

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
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => ({

    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    console.log('me получаем данные')
    authAPI.me()
        .then(response => {
            if (response.data.resultCode == 0) {    // response code 1
                console.log('пытаемся получить данные me')
                console.log(response.data.data)
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id , email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}