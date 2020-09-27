import React from "react"
import s from './Messages.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {addMessAC, changeNewMessTextAC, messagePageType} from "../../../../redux/messagesReduser.";


type MessagesPropsType = {
    messagePage: messagePageType
    dispatch: (action: Object) => void
}

function Messages(props:MessagesPropsType) {
    const newMessElement = React.createRef<HTMLTextAreaElement>()
    let addMess = () => {
        // @ts-ignore
        let text= newMessElement.current.value
        //props.addMessage(text)
        props.dispatch(addMessAC())
    }
    let onChangeNewPostText = () => {
        // @ts-ignore
        //props.changeNewMessageText(newMessElement.current.value)
        props.dispatch(changeNewMessTextAC(newMessElement.current.value))
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
                                       onChange={onChangeNewPostText}
                                       value ={props.messagePage.newMessageText}> </textarea>
                            <button className='postBtn' onClick={addMess}>click</button>
                        </div>

                    </div>
                </div>
            </div>





    )

}


export default Messages