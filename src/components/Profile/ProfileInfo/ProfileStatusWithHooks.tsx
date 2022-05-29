import React, {ChangeEvent, useState} from 'react';


const ProfileStatusWithHooks = (props: any) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status!'}</span>
                </div>
                : <div>
                    <input
                        value={status}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        onChange={(e) => onStatusChange(e)}/>
                </div>
            }
        </div>
    );
};


export default ProfileStatusWithHooks

