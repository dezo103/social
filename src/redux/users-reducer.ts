import {Dispatch} from 'redux'
import {usersAPI} from '../API/api'
import {updateObjectInArray} from '../utils/object-helpers'
import {UsersType} from '../types/types'
import {AppStateType} from './redux-store'
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type LocationType = {
    city: string
    country: string
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const InitialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = InitialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type ActionsType =
    FollowSuccessActionsType |
    UnfollowSuccessActionsType |
    SetUsersActionsType |
    SetCurrentPageActionsType |
    SetTotalUsersCountActionsType |
    ToggleIsFetchingActionsType |
    ToggleFollowingProgressActionsType

type FollowSuccessActionsType = {
    type: typeof FOLLOW
    userID: number
}

type UnfollowSuccessActionsType = {
    type: typeof UNFOLLOW
    userID: number
}

type SetUsersActionsType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

type SetCurrentPageActionsType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalUsersCountActionsType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

type ToggleIsFetchingActionsType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type ToggleFollowingProgressActionsType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFollowing: boolean,
    userId: number
}

export const followSuccess = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID: userID} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: SET_USERS, users: users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFollowing: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId} as const
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>

export const requestUsers = (page: number, pageSize: number) => async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionsType | UnfollowSuccessActionsType) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: DispatchType) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer

