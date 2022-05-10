import React from "react";
import { connect } from "react-redux";
import InputRow from "../../InputRow/InputRow";
import '../Auth.css';
import { getLoginUser } from './../../../redux/reducers/authReducer';

const Login = (props) => {
    // const authLogin = () => {
    //     if (login && password) {
    //         props.getLoginUser(login, password);

    //         if (props.isAuth)
    //             window.location.replace("http://localhost:3001/");
    //     }
    // }

    return (
        <>
            <InputRow 
                inputs={props.inputs.rows[0]} 
                change={props.inputs.methods.change} 
                errors={props.inputs.values.errors} />
        </>
    );
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(
    mapStateToProps, {
    getLoginUser
}
)
    (Login);