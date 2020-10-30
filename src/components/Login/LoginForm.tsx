import {Field, Form} from "react-final-form";
import '../../App.css'
import s from './Login.module.css'
import {composeValidators, maxLength, minMaxLength, required} from "../ValidateForm";
import React from "react";


export type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormPropsType = {
    onSubmit: (values: FormValuesType) => void
}
export const LoginForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className={s.loginForm}>
                    <div>
                        <Field name="email" validate={composeValidators(required, maxLength(30))}>
                            {
                                ({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="email"
                                               className={s.inputField}/>
                                        {meta.error && meta.touched && <div className={s.error}>{meta.error}</div>}
                                    </div>
                                )}
                        </Field>
                    </div>
                    <div>
                        <Field name="password" validate={composeValidators(required, minMaxLength(8, 20))}>
                            {
                                (props) => (
                                    <div>
                                        <input {...props.input} type="text" placeholder="password"
                                               className={s.inputField}/>
                                        {props.meta.error && props.meta.touched && <div className={s.error}>{props.meta.error}</div>}
                                    </div>
                                )}
                        </Field>
                    </div>
                    <div className={s.rememberMe}>
                        <Field name="rememberMe" component="input" type="checkbox"/> remember me
                    </div>
                    <div className={s.buttons}>
                        <div className={s.button}> <button type="submit" className='logButton'>LogIn</button></div>
                        <div className={s.button}> <button type="reset" onClick={form.reset} className='logButton'>Reset</button> </div>
                    </div>
                </form>
            )}
        </Form>
    )
}