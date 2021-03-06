import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) =>void
}

const ProfileStatusWithHooks: FC<ProfileStatusWithHooksPropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
                    <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'no status!'}</span>
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

