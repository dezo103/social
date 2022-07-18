import React, {FC} from "react";
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

export const Users: FC<UsersPropsType> = ({
                                                    users,
                                                    follow,
                                                    unfollow,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress
                                                }) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
        />

        {users.map(u => <User
            key={u.id}
            user={u}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
        />)}
    </div>
}
