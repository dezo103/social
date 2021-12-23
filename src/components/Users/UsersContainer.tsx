import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type MapStatePropsType = {
    users: Array<UsersType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
