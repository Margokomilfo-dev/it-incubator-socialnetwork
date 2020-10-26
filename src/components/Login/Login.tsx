import React from "react"
import {Field, Form} from "react-final-form"
//import {Form, reduxForm, Field} from "redux-form";

type LoginPropsType = {}
export const Login: React.FC<LoginPropsType> = (props: LoginPropsType) => {
    const onSubmit = (values: any): void => {
        console.log(values)
    }
    return (
        <div>
            <div>Login</div>
            <LoginForm onSubmit={onSubmit}/>
            {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
        </div>
    )
}
type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormPropsType = {
    onSubmit: (values: FormValuesType) => void
}
export const LoginForm = (props: LoginFormPropsType) => {
    return (
        <Form  onSubmit={props.onSubmit}>
            {({ handleSubmit}) =>  (
                <form onSubmit={handleSubmit}>
                    <div><Field name="email" component="input" placeholder="email" /></div>
                    <div><Field name="password" component="input" placeholder="password" /></div>
                    <div><Field name="rememberMe" component="input" type="checkbox"/></div>
                    <div><button type="submit">LogIn</button></div>
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