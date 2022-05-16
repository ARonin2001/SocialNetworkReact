import React from "react";
import InputStatus from "./InputStatus";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUserStatus } from "../../../../../../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const InputStatusContainer = (props) => {
    let params = useParams();

    const formik = useFormik({
        initialValues: {
            status: ''
        },
        validationSchema: Yup.object().shape({
            status: Yup.string()
                .max(100, "The max characters is 100")
        }),
        onSubmit: values => {
            props.updateUserStatus(params.id, values.status);
        }
    });

    return (
        <InputStatus formik={formik} />
    );
};

export default connect(
    null,
    {updateUserStatus}
)
(InputStatusContainer);