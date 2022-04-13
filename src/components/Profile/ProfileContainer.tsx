import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStatePropsType = {
    profile: any
    isAuth: boolean
}

type mapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component<any>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render () {
        if(!this.props.isAuth) return <Redirect to={"/login"} />

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: any): mapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
