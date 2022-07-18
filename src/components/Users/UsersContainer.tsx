import React, {ComponentType} from 'react'
import {connect} from "react-redux"

import {AppStateType} from "../../redux/redux-store"
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer"
import {Users} from "./Users"
import {Preloader} from "../common/Preloader/Preloader"
import {compose} from "redux"
import {
    getCurrentPageRSL, getFollowingInProgressRSL,
    getIsFetchingRSL,
    getPageSizeRSL,
    getTotalUsersCountRSL,
    getUsersRSL
} from "../../redux/users-selectors"
import {UsersType} from "../../types/types"

export type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersAPIPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

    // setCurrentPage: (currentPage: number) => void
    // follow: (userID: number) => void
    // unfollow: (userID: number) => void
    // toggleFollowingProgress: (isInProgress: boolean, uId: number) => void
    // getUsers: (currentPage: number, pageSize: number) => void
}

export type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isInProgress: boolean, uId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string //doesn't work because of error from App.ts. (react children ...)
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export class UsersContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (p: number) => {
        const {pageSize} = this.props
        this.props.getUsers(p, pageSize)
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersRSL(state),
        pageSize: getPageSizeRSL(state),
        totalUsersCount: getTotalUsersCountRSL(state),
        currentPage: getCurrentPageRSL(state),
        isFetching: getIsFetchingRSL(state),
        followingInProgress: getFollowingInProgressRSL(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)
