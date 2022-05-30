import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

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
        {props.users.map(u => <div key={u.id} className={styles.userWrapper}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                </div>
            </div>
            <div>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                </span>
            </div>
        </div>)
        }
        <Paginator totalUsersCount = {props.totalUsersCount}
                   pageSize = {props.pageSize}
                   currentPage = {props.currentPage}
                   onPageChanged = {props.onPageChanged}
        />

    </div>
}
