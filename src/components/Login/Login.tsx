import React from "react"
import {FormValuesType, LoginForm} from "./LoginForm"
import s from './Login.module.css'
import {connect} from "react-redux";
import {AllAppTypes} from "../../redux/redux-store";
import {login} from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";

type MapStateToPropsType = {
    isLogin: boolean
    serverError: string | null
}
type MapDispatchToPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
}
type LoginPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
    isLogin: boolean
    serverError: string | null
}

const Login: React.FC<LoginPropsType> = (props: LoginPropsType) => {
    debugger
    const onSubmit = (values: FormValuesType): void => {
        if (props.serverError){

        }
        props.login(values.email, values.password, values.rememberMe, null)

    }

    if (props.isLogin) {
        return <Redirect to='/profile'/>
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
                <LoginForm onSubmit={onSubmit} serverError={props.serverError}/>
                {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
            </div>
        </div>
    )
}
let mapStateToProps = (state: AllAppTypes):MapStateToPropsType=> ({
    isLogin: state.auth.isLogin,
    serverError: state.auth.serverError
})
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllAppTypes>(mapStateToProps, {login})(Login)
