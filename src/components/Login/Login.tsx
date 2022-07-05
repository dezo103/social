import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}


const LoginForm: React.FC<InjectedFormProps<any>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <p>To log in input this data:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>

            {createField('email', 'email', Input, [required])}
            {createField('password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'rememberMe')}

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
            {props.captchaUrl && createField('symbols from image', 'captcha', Input, [required], {})}

            {props.error &&
                <div className = {style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>

        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, any>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return props.isAuth
    ? <Redirect to={"/profile"}/>
    : <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
        </div>

};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)





