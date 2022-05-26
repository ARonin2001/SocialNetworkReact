import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import {updateProfileAva} from '../../../../../../redux/reducers/profileReducer';

import AvaUpload from './AvaUpload';
import './AvaUpload.css';
import { useParams } from 'react-router-dom';
import withPreloader from '../../../../../HOC/withPreloader/withPreloader';

const AvaUploadContainer = (props) => {
    const params = useParams();

    let [isPreloader, setPreloader] = useState(false);

    const Preloader = withPreloader(AvaUpload);

    const updateAvatar = async (fileImg) => {
        if(props.userId === params.id && fileImg) {
            setPreloader(true);
            await props.updateProfileAva(fileImg, props.userId);
            setPreloader(false);
        }
    }

    let formik = useFormik({
        initialValues: {
            avaImg: FormData
        },
        validationSchema: Yup.object().shape({
            avaImg: Yup.mixed()
                .test(
                    "fileType",
                    "Incorrect file type",
                    (file) =>
                        file && ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
                ).required('Requred')
        }),
        onSubmit: values => {
            updateAvatar(values.avaImg);
        },
    });

    return (
        <div className='update__ava'>
            <Preloader formik={formik} isPreloader={isPreloader} />
        </div>

        // <div className='update__ava'>
        //     <div className='preloader__container'>
        //         <div className={`preloader ${isPreloader ? 'active': ''}`}>
                    
        //         </div>
        //         <AvaUpload formik={formik} />
        //     </div>
        // </div>
    );
};

const mapStateToPros = state => {
    return {
        userId: state.profilePage.profile._id
    }
}

export default connect(
    mapStateToPros,
    {updateProfileAva}
)
(AvaUploadContainer);