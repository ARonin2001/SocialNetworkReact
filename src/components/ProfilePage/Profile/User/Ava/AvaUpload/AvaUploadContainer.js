import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AvaUpload from './AvaUpload';

const AvaUploadContainer = (props) => {
    const formik = useFormik({
        initialValues: {
            avaImg: ''
        },
        validationSchema: Yup.object.shape({
            avaImg: Yup.mixed()
                .test(
                    "fileType",
                    "Incorrect file type",
                    (file) =>
                        file && ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
                )
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <AvaUpload formik={formik} />
    );
};

export default AvaUploadContainer;