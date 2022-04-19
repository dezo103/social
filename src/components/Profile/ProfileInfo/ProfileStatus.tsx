import React, {ChangeEvent, useState} from 'react';

import s from './ProfileInfo.module.css';
import {useDispatch} from "react-redux";


const ProfileStatus = (props: any) => {

    let [state, setState] = useState({editMode: false, status: ""})

    let activateEditMode = () => {
        setState({
            editMode: true,
            status: props.status
        })
    }

    let deactivateEditMode = () => {
        setState({
            editMode: false,
            status: props.status
        })
        props.updateStatus(state.status)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            editMode: true,
            status: e.currentTarget.value
        })
    }

    return (
        <div>
            {!state.editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status!' }</span>
                </div>
                : <div>
                    <input
                        value={state.status}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        onChange={(e) => onStatusChange(e)}></input>
                </div>
            }
        </div>
    );
};


export default ProfileStatus

