
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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any) => ({type: 'SET_USER_DATA', data: {userId, email, login}})