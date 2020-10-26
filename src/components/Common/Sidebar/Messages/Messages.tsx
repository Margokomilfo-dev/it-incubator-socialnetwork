import React, {useState} from "react"
import s from './Messages.module.css'
import UserDialog from "./UserDialog/UserDialog"
import Message from "./Message/Message"
import {messagePageType} from "../../../../redux/messagesReduser"
import {AddMessageForm, FormPropsType} from "./AddMessageForm"


type MessagesPropsType = {
    messagePage: messagePageType
    addMessage: (value: { messageText: string }) => void
    isLogin: boolean
}

function Messages(props: MessagesPropsType) {

    let onAddMess = (values: FormPropsType): void => {
        props.addMessage(values)
        //props.addPost(value)
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
                    <div className={s.addMessageTextarea}>
                        <AddMessageForm addMessage={onAddMess}/>
                             {/*<textarea className={s.textarea_message}*/}
                             {/*          onChange={(e)=> {setValue(e.currentTarget.value)}}*/}
                             {/*          value={value}> </textarea>*/}
                             {/*<button className='postBtn' onClick={() => {onAddMess(value)}}>click</button>*/}
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Messages