import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photo"/>
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.lookingForAJob ? 'Да, ищу' : 'Неа'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
