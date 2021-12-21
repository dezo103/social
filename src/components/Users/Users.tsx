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
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {id: 1, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //         followed: false, fullName: "Tom", status: "goodMan", location: {city: "Minsk", country: "Belarus"}},
        //     {id: 2, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //         followed: true, fullName: "Ann", status: "goodGirl", location: {city: "Moscow", country: "Russia"}},
        //     {id: 3, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //         followed: false, fullName: "Kim", status: "goodBoss", location: {city: "Kiev", country: "Ukraine"}},
        // ])
    }

    return (
        <div>
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
