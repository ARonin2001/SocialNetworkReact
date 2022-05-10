import React from 'react';
import Register from './Register';

const RegisterContainer = ({formik}) => {
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
                    title: "Name",
                    type: "text",
                    name: "name",
                    value: formik.values.name,
                },
                {
                    id: 2,
                    title: "LastName",
                    type: "text",
                    name: "lastName",
                    value: formik.values.lastName,
                }
            ],
            [
                {
                    id: 3,
                    title: "Email",
                    type: "email",
                    name: "email",
                    value: formik.values.email,
                },
                {
                    id: 4,
                    title: "Password",
                    type: "password",
                    name: "password",
                    value: formik.values.password,
                }
            ]
        ]
    };

    const selects = [
        {
            id: 1,
            title: "Country",
            name: "country",
            values: ["Japan", "Russia", "USA", "Korea"],
        },
        {
            id: 2,
            title: "City",
            name: "city",
            values: ["Tokio", "Moskow", "Vashington", "Seul"]
        }
    ]

    return (
        <Register inputs={inputs} selects={selects} values={formik.values} handleChange={formik.handleChange} errors={formik.errors} />
    );
};

export default RegisterContainer;