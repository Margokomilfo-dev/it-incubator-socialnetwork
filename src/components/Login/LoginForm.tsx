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
                    {/*<div>
                        <Field name="email" component="input" placeholder="email" validate={required}/></div>*/}
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
                        {/*<Field name="password" component="input" placeholder="password"/>*/}
                        <Field name="password" validate={composeValidators(required, minMaxLength(8, 20))}>
                            {
                                ({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="password"
                                               className={s.inputField}/>
                                        {meta.error && meta.touched && <div className={s.error}>{meta.error}</div>}
                                    </div>
                                )}
                        </Field>
                    </div>
                    <div className={s.rememberMe}>
                        <Field name="rememberMe" component="input" type="checkbox"/> remember me
                    </div>
                    <div className={s.buttons}>
                        <div className={s.button}>
                            <button type="submit" className='logButton'>LogIn</button>
                        </div>
                        <div className={s.button}>
                            <button type="button"
                                    onClick={form.reset} className='logButton'>Reset
                            </button>
                        </div>
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