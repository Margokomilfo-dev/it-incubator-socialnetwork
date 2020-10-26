import {Field, Form} from "react-final-form"
import React from "react"
import {maxLength} from "../../../ValidateForm";
import s from "./UserStatus.module.css";

export type FormValuesType = {
    status: string
}
type StatusFormPropsType = {
    onSubmit: (values: FormValuesType) => void
}
export const StatusForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="status" validate={maxLength(300)}>
                            {
                                ({textarea, meta}) => (
                                    <div>
                                        <textarea {...textarea} placeholder="Enter your status..."
                                                  className={s.textarea_status}
                                                  onBlur={props.statusOff}
                                                  onChange={props.onChangeStatus}
                                                  autoFocus
                                                  value={props.value}/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                )}
                        </Field>
                    </div>
                </form>
            )}
        </Form>
        // <Form>
        //     <form onSubmit={props.handleSubmit}>
        //         <div><Field name="email" component="input" placeholder="email" /></div>
        //         <div><Field name="password" component="input" type="password" placeholder="password" /></div>
        //         <div><Field name="rememberMe" component="input" type="checkbox"/></div>
        //         <div><button type="submit">LogIn</button></div>
        //     </form>
        // </Form>
    )
}
//const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)