import React from 'react';
import Login from './Login';

const LoginContainer = ({formik}) => {
    const inputs = {
        methods: {
            change: formik.handleChange, 
        },
        values: {
            errors: formik.errors
        },
    
        rows: [
            [
                {
                    id: 1,
                    title: "Email",
                    type: "email",
                    name: "email",
                    value: formik.values.email,
                },
                {
                    id: 2,
                    title: "Password",
                    type: "password",
                    name: "password",
                    value: formik.values.password,
                }
            ],
        ]
    };

    return (
        <Login 
            inputs={inputs} 
            values={formik.values} 
            handleChange={formik.handleChange} 
            errors={formik.errors} />
    );
};

export default LoginContainer;