import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType, RootStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>*/}
            {/*    <Field placeholder={'email'} name={'email'}*/}
            {/*           component={Input} validate={[required]}/>*/}
            {/*</div>*/}
            {createField('email', 'email', Input, [required])}
            {/*<div>*/}
            {/*    <Field placeholder={'password'} name={'password'} type={'password'}*/}
            {/*           component={Input} validate={[required]}/>*/}
            {/*</div>*/}
            {createField('password', 'password', Input, [required], {type: 'password'})}
            {/*<div>*/}
            {/*    <Field type={'checkbox'} name={'rememberMe'}*/}
            {/*           component={Input}/>*/}
            {/*</div>*/}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'rememberMe')}
            {error &&
                <div className = {style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return props.isAuth
    ? <Redirect to={"/profile"}/>
    : <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)





