import React from 'react';

import s from './ProfileInfo.module.css';

export type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}></input>
            </div>
        </div>
    );
};

