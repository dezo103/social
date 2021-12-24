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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className = {styles.pagination}>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage ===  p ? styles.selectedPage : ""} onClick={() => this.onPageChanged(p)}>{p} </span>
                        })
                    }
                </div>
                {this.props.users.map(u => <div key={u.id} className = {styles.userWrapper}>
                    <div>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>follow</button> }
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
    }
}


