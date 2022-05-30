import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    user: UsersType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export const User = (props: UserPropsType) => {
    let user = props.user
    return <div className={styles.userWrapper} >
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id)
                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>follow</button>}
                </div>
            </div>
            <div>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                </span>
            </div>
        </div>
}
