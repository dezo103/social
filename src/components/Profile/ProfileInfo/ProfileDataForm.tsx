import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";


export const ProfileDataForm: React.FC<InjectedFormProps<any>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
            {
                props.error &&
                <div className = {style.formSummaryError}>
                    {props.error}
                </div>
            }
        </div>

        <div><p><b>Full name:</b>{createField('Full name', 'fullName', Input, [])}</p></div>
        <div><b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</div>
        <div><b>My professional
            skills:</b>{createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</div>
        <div><p><b>About me:</b>{createField('About me', 'aboutMe', Textarea, [])}</p></div>
        <div>
            <p><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
                </div>
            )}</p>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<any, any>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm