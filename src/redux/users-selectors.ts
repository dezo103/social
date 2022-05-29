import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersRSL = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSizeRSL = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountRSL = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageRSL = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingRSL = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressRSL = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}







