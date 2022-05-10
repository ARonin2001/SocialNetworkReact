import React from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";

import '../Auth.css';
import AuthForm from "../AuthForm/AuthForm";
import LoginContainer from "../Login/LoginContainer";
import { getLoginUser } from "../../../redux/reducers/authReducer";


const AuthLogin = (props) => {
    const authLogin = (login, password) => {
            if (login && password) {
                props.getLoginUser(login, password);
    
                if (props.isAuth)
                    window.location.replace("http://localhost:3001/");
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
                .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
                ),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="block auth">
            <div className="auth__container">
                <h2 className="auth__title title">
                    Registration
                </h2>
                <div className="line"></div>
                {/* Formik */}
                
                <AuthForm handeSubmit={formik.handleSubmit}>
                    <LoginContainer formik={formik} />
                </AuthForm>
            </div>
        </div>
    );
};

export default AuthLogin;