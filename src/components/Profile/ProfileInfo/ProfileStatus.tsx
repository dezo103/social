import React, {useState} from 'react';

import s from './ProfileInfo.module.css';


const ProfileStatus = (props: any) => {

    let [state, setState] = useState({editMode: false})

    let activateEditMode = () => {
        setState({
            editMode: true
        })
    }

    let deactivateEditMode = () => {
        setState({
            editMode: false
        })
    }

    return (
        <div>
            {!state.editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input
                        value={props.status}
                        onBlur={deactivateEditMode}
                        autoFocus={true}></input>
                </div>
            }
        </div>
    );
};


export default ProfileStatus

