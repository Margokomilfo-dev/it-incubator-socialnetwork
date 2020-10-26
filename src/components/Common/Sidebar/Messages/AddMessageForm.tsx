import {Field, Form} from "react-final-form";
import s from './Messages.module.css'
import '../../../../App.css'
import React from "react";

export type FormPropsType = {
    messageText: string
}
type AddMessageFormPropsType = {
    addMessage: (values: FormPropsType) => void
}
export const AddMessageForm = (props: AddMessageFormPropsType) => {
    return (
        <Form  onSubmit={props.addMessage}>
            {({ handleSubmit}) =>  (
                <form onSubmit={handleSubmit} className={s.messTextarea}>
                    <div><Field name="messageText"
                                component="textarea"
                                placeholder="enter your message text"
                                className={s.textarea_message}
                    /></div>
                    <div><button type="submit" className='postBtn'>LogIn</button></div>
                </form>
            )}
        </Form>
    )

}