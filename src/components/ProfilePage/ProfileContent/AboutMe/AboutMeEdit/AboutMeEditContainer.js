import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { updateUserAboutMe } from '../../../../../redux/reducers/profileReducer';
import { updateUserAboutMe } from './../../../../../redux/reducers/authReducer';

import AboutMeEdit from './AboutMeEdit';
import * as Yup from 'yup';

const AboutMeEditContainer = (props) => {
    let aboutMe = props.aboutMe

    const params = useParams();
    const profileId = params.id;

    const updateAboutMe = (profileId, userId, values) => {
        if(profileId === userId) {
            let newAboutMe = {};
            // let location = {};
            for(let [key, value] of Object.entries(values)) {
                // if(value === "country" || value === "city")
                //     location[key] = value;
                newAboutMe[key] = value;
            }
            // newAboutMe.location = location;
            
            props.updateUserAboutMe(newAboutMe, userId);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: aboutMe.name,
            lastName: aboutMe.lastName,
            dateBirth: aboutMe.dateBirth,
            gender: aboutMe.gender,
            status: aboutMe.status,
            description: aboutMe.description,
            hobby: aboutMe.hobby,
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, "Must be 2 characters or more")
                .max(17, "Must be less 17 characters")
                .required(),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .max(17, "Must be less 17 characters")
                .required("Required"),
            gender: Yup.string()
                .required('Required'),
            dateBirth: Yup.date()
                .min(new Date("1901-01-01"), "Max date is 01-01-1901")
                .max(new Date("2010-01-01"), "Min date is 01-01-2010")
                .default(() => new Date())    
                .required('Required'),
        }),
        onSubmit: async (values) => {
            await updateAboutMe(profileId, props.userId, values);
            props.setEditAboutMe(false);
        }
    })

    return (
        <AboutMeEdit aboutMe={aboutMe} formik={formik} />
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth._id,
    }
}

export default connect(
    mapStateToProps,
    {updateUserAboutMe}
)
(AboutMeEditContainer);