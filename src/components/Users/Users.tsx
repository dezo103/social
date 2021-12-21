import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from  "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {props.users.map(u => <div key={u.id} className = {styles.userWrapper}>
                <div>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>follow</button> }
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
            </div>)}
        </div>
    );
};

export default Users;
