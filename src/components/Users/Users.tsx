import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    toggleFollowingProgress: (isInProgress: boolean, uId: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

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
                            props.toggleFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "166b9e97-d8fe-44b6-af0e-8586f7357111"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "166b9e97-d8fe-44b6-af0e-8586f7357111"
                                }})
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

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
        <div className={styles.pagination}>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => props.onPageChanged(p)}>{p} </span>
                })
            }
        </div>
    </div>
}
