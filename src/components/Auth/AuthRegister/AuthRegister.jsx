import React from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";

import '../Auth.css';
import AuthForm from "../AuthForm/AuthForm";
import RegisterContainer from "../Register/RegisterContainer";
import { connect } from "react-redux";
import { createNewUser } from "../../../redux/reducers/authReducer";

const AuthRegister = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            dateBirth: Date,
            country: '',
            city: '',
            gender: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, "Must be 2 characters or more")
                .required(),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string().email('Invalid email')
                .required(),
            password: Yup.string()
                .required('Please Enter your password')
                .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
                ),
            gender: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            city: Yup.string()
                .required('Required'),
            dateBirth: Yup.date()
                .min(new Date("1901-01-01"), "Max date is 01-01-1901")
                .max(new Date("2010-01-01"), "Min date is 01-01-2010")
                .default(() => new Date())    
                .required('Required'),
        }),
        onSubmit: values => {
            let response = props.createNewUser(values);
            console.log(response);
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
                
                <AuthForm handleSubmit={formik.handleSubmit} btnText={"REGISTER"} linkText={"Login"} link={"/auth/login"}>
                    <RegisterContainer formik={formik} />
                </AuthForm>
            </div>
        </div>
    );
};

export default connect(
    null, 
    {createNewUser}
)(AuthRegister);