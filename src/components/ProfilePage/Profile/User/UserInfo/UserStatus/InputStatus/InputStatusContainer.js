import React, { useState } from "react";
import InputStatus from "./InputStatus";
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { updateUserStatus } from "../../../../../../../redux/reducers/profileReducer";
import { updateUserStatus } from "../../../../../../../redux/reducers/authReducer";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import withPreloader from './../../../../../../HOC/withPreloader/withPreloader';

const InputStatusContainer = ({userId, ...props}) => {
    let params = useParams();

    let [isPreloader, setPreloader] = useState(false);

    const InputStatusWithPreloader = withPreloader(InputStatus);

    const updateStatus = async(values) => {
        setPreloader(true);
        
        if(params.id === userId) {
            await props.updateUserStatus(userId, values.status);
            props.closeStatusEdit();
        }
        
        setPreloader(false);
    }

    const formik = useFormik({
        initialValues: {
            status: ''
        },
        validationSchema: Yup.object().shape({
            status: Yup.string()
                .max(100, "The max characters is 100")
        }),
        onSubmit: values => {
            updateStatus(values);
        }
    });

    return (
        <InputStatus formik={formik} />
        // <InputStatusWithPreloader formik={formik} isPreloader={isPreloader} />
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth._id
    }
}

export default connect(
    mapStateToProps,
    {updateUserStatus}
)
(InputStatusContainer);