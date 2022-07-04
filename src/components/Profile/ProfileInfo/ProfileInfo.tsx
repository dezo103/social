import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ProfileDataForm} from "./ProfileDataForm";


const ProfileInfo = (props: any) => {

    const [editMode, setEditMode] = useState(false)

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
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large || userPhoto} alt="photo" className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={(e) => onMainPhotoSelected(e)}/>}

                {editMode
                ? <ProfileDataForm profile={props.profile}/>
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               goToEditMode={() => {setEditMode(true)}}/>}

            </div>
        </div>
    )
}

const ProfileData = (props: any) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}

        <div><p><b>About me:</b>{props.profile.aboutMe}</p></div>
        <div><b>My name is:</b> {props.profile.fullName}</div>
        <div><b>Looking for a job:</b> {props.profile.lookingForAJob || 'No'}</div>
        <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>
        <div>
            <p><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}</p>
        </div>
    </div>
}

const Contact = (props: any) => {
    return <div className={s.contact}>
        <b>{props.contactTitle}</b>: {props.contactValue}
    </div>;
}

export default ProfileInfo;
