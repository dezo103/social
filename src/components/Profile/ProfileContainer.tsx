import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStatePropsType = {
    profile: any
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

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state: any): mapStatePropsType => ({
    profile: state.profilePage.profile,
})


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
