import React, {ChangeEvent, useState} from "react"
import s from './Messages.module.css'
import UserDialog from "./UserDialog/UserDialog"
import Message from "./Message/Message"
import {addMessAC, changeNewMessTextAC, messagePageType} from "../../../../redux/messagesReduser"


type MessagesPropsType = {
    messagePage: messagePageType
    addMess: (value: string) => void
    onChangeNewPostText: Function
}

function Messages(props: MessagesPropsType) {
    let [value, setValue] = useState<string>('')
    const newMessElement = React.createRef<HTMLTextAreaElement>()

    let onAddMess = (value: string) => {
        props.addMess(value)
        setValue('')
    }
    let changeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
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
                             <textarea className={s.textarea_message} ref={newMessElement}
                                       onChange={changeNewPostText}
                                       value={value}> </textarea>
                        <button className='postBtn' onClick={() => {onAddMess(value)}}>click</button>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Messages