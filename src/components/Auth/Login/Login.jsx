import React from "react";
import { connect } from "react-redux";
import InputRow from "../../InputRow/InputRow";
import '../Auth.css';

const Login = (props) => {
    return (
        <>
            <InputRow 
                inputs={props.inputs.rows[0]} 
                change={props.inputs.methods.change} 
                errors={props.inputs.values.errors} />
        </>
    );
};

export default Login;