import React from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";

import '../Auth.css';
import AuthForm from "../AuthForm/AuthForm";
import LoginContainer from "../Login/LoginContainer";
import { getLoginUser } from "../../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const AuthLogin = (props) => {
    const authLogin = (login, password) => {
        if (login && password) {
            props.getLoginUser(login, password);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email')
                .required(),
            password: Yup.string()
                .required('Please Enter your password')
                // .matches(
                // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                // "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
                // ),
        }),
        onSubmit: values => {
            authLogin(values.email, values.password);
        },
    });
    if (props.isAuth)
        return <Navigate to={`/profile/${props.userId}`} />

    return (
        <div className="block auth">
            <div className="auth__container">
                <h2 className="auth__title title">
                    Registration
                </h2>
                <div className="line"></div>
                {/* Formik */}
                
                <AuthForm handleSubmit={formik.handleSubmit} btnText={"LOGIN"} linkText={"Register"} link={"/auth/register"}>
                    <LoginContainer formik={formik} />
                </AuthForm>
            </div>
        </div>
    );
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
    }
}

export default connect(
    mapStateToProps,
    {
        getLoginUser
    }

)(AuthLogin);