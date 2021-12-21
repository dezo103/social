
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = "SET_USES"

export type LocationType = {
    city: string
    country: string
}

export type UsersPhotosType = {
    small: string | null
    large: string | null
}

export type UsersType  = {
    id: number
    photos: UsersPhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: Array<UsersType>
}

const InitialState: InitialStateType = {
    users: [
        // {id: 1, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //     followed: false, fullName: "Tom", status: "goodMan", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //     followed: true, fullName: "Ann", status: "goodGirl", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, photoURL: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        //     followed: false, fullName: "Kim", status: "goodBoss", location: {city: "Kiev", country: "Ukraine"}},
    ]
}

export const usersReducer = (state: InitialStateType  = InitialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ?  {...u, followed: true} : u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ?  {...u, followed: false} : u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID: userID} as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {type: SET_USERS, users: users} as const
}
export default usersReducer
