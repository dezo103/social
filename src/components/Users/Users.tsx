import React from "react";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";
import {UsersType} from "../../types/types";

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
        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
        />

        {props.users.map(u => <User
            key={u.id}
            user = {u}
            follow = {props.follow}
            unfollow = {props.unfollow}
            followingInProgress = {props.followingInProgress}
        />)}
    </div>
}
