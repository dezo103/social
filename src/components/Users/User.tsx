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
    let u = props.user
    return <div className={styles.userWrapper} >
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
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
        </div>
}
