import React from "react"
import s from './Messages.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {addMessAC, changeNewMessTextAC, messagePageType} from "../../../../redux/messagesReduser.";


type MessagesPropsType = {
    messagePage: messagePageType
    addMess: Function
    onChangeNewPostText: Function
}

function Messages(props: MessagesPropsType) {

    const newMessElement = React.createRef<HTMLTextAreaElement>()

    let onAddMess = () => {
        props.addMess()
    }
    let changeNewPostText = () => {
        // @ts-ignore
        props.onChangeNewPostText(newMessElement.current.value)
    }

    return (
        <div className={s.message}>
            <div className={s.dialogs}>
                {
                    props.messagePage.dialogs.map(d => <UserDialog id={d.id} name={d.name}/>)
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
                                       value={props.messagePage.newMessageText}> </textarea>
                        <button className='postBtn' onClick={onAddMess}>click</button>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Messages