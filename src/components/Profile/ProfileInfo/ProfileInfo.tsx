import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt="photo" className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={(e) => onMainPhotoSelected(e)}/>}
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
