import React from "react";
import {Contact} from "./ProfileInfo";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import { InjectedFormProps, reduxForm} from "redux-form";


export const ProfileDataForm: React.FC<InjectedFormProps<any>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        {props.isOwner && <div><button>save</button></div>}

        <div><p><b>Full name:</b>{createField('Full name', 'fullName', Input, [])}</p></div>
        <div><b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</div>
        <div><b>My professional skills:</b>{createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</div>
        <div><p><b>About me:</b>{createField('About me', 'aboutMe', Textarea, [])}</p></div>
        {/*<div>*/}
        {/*    <p><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key =>*/}
        {/*        <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}</p>*/}
        {/*</div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm<any, any>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm