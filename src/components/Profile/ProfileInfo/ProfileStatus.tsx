import React from 'react';

import s from './ProfileInfo.module.css';


const ProfileStatus = (props: any) => {

    let state = {
        editMode: false
    }

    return (
        <div>
            {!state.editMode
                ? <div>
                    <span>{props.status}</span>
                </div>
                : <div>
                    <input value={props.status}></input>
                </div>
            }
        </div>
    );
};


export default ProfileStatus

