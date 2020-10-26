import s from "./UserStatus.module.css"
import React, {ChangeEvent, useState} from "react"
import {ProfileType} from "../../../../redux/profileReduser"
import {StatusForm} from "./StatusForm";
import {Field, Form} from "react-final-form";
import {maxLength} from "../../../ValidateForm";


type UserStatusPropsType = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string) => void
}

function UserStatus(props: UserStatusPropsType) {
    let [statusMod, setStatusMod] = useState(false)
    let [value, setValue] = useState('no status')

    const statusOn = () => {
        setStatusMod(true)
        if (props.status) {
            setValue((props.status).toString())
        }
    }
    const onChangeStatus = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const statusOff = () => {
        if (value.length <= 300) {
            props.updateStatus(value)
            setStatusMod(false)
        } else {
            alert('>300 symbols')
        }
    }
    let onSubmit = (value: string) => {
        console.log(value)
    }
    return (
        <div className={s.status}>
            {
                statusMod
                    ? <textarea onBlur={statusOff} className={s.textarea_status}
                                onChange={onChangeStatus}
                                placeholder='status' autoFocus value={value}/>
                    // <div>
                    //     <StatusForm />
                    // </div>
                    : <span onDoubleClick={statusOn}
                            className={s.span_status}> {!props.status ? value : props.status} </span>
            }

        </div>
    )
}

export default UserStatus
