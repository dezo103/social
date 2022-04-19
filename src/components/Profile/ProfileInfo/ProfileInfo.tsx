import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photo"/>
                <ProfileStatus status="blablaba"/>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.lookingForAJob ? 'Да, ищу' : 'Неа'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
