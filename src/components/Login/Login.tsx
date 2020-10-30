import React from "react"
import {Field, Form} from "react-final-form"
import {FormValuesType, LoginForm} from "./LoginForm"
import s from './Login.module.css'

type LoginPropsType = {}
export const Login: React.FC<LoginPropsType> = (props: LoginPropsType) => {
    const onSubmit = (values: FormValuesType): void => {
        console.log(values)
    }
    return (
        <div className={s.login}>
            <div className={s.title}>Login</div>
            <div className={s.date}>
                <div>
                    email: <span className={s.loginData}>margokomilfo@mail.ru</span>
                </div>
                <div>
                    password: <span className={s.loginData}>123456789</span>
                </div>
            </div>
            <div className={s.subTitle}>Please, enter your email and password:</div>

            <div>
                <LoginForm onSubmit={onSubmit}/>
                {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
            </div>


        </div>
    )
}