import React from "react";
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dimych</div>
                <div className={s.dialog}>Artem</div>
                <div className={s.dialog}>Sanya</div>
                <div className={s.dialog}>Julia</div>
                <div className={s.dialog}>Loshara</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs
