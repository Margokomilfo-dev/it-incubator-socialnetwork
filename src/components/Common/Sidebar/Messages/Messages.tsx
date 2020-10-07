import React, {ChangeEvent, useState} from "react"
import s from './Messages.module.css'
import UserDialog from "./UserDialog/UserDialog"
import Message from "./Message/Message"
import {messagePageType} from "../../../../redux/messagesReduser"


type MessagesPropsType = {
    messagePage: messagePageType
    addMess: (value: string) => void
}

function Messages(props: MessagesPropsType) {
    let [value, setValue] = useState<string>('')

    let onAddMess = (value: string) => {
        props.addMess(value)
        setValue('')
    }

    return (
        <div className={s.message}>
            <div className={s.dialogs}>
                {
                    props.messagePage.dialogs.map(d => <UserDialog id={d.id} name={d.name} key={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                <div className={s.messArea}>
                    {
                        props.messagePage.messages.map(m => <Message message={m.message}/>)
                    }
                </div>
                <div className={s.newMessArea}>
                    <div className={s.messTextarea}>
                             <textarea className={s.textarea_message}
                                       onChange={(e)=> {setValue(e.currentTarget.value)}}
                                       value={value}> </textarea>
                        <button className='postBtn' onClick={() => {onAddMess(value)}}>click</button>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Messages