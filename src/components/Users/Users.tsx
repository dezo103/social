import React from "react";
import {UsersType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    return <div>
        {props.users.map(u => <User
            key={u.id}
            user = {u}
            follow = {props.follow}
            unfollow = {props.unfollow}
            followingInProgress = {props.followingInProgress}
        />)}

        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
        />
    </div>
}
