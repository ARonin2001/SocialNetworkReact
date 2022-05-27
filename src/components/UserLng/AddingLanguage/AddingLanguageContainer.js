import { useFormik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as Yup from 'yup';
import { setAllLanguages } from "../../../redux/reducers/languagesReducer";
import { addNewLanguage } from "../../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";

import AddingLanguage from "./AddingLanguage";
import withPreloader from "../../HOC/withPreloader/withPreloader";

const AddingLanguageContainer = (props) => {
    const params = useParams();
    
    let [isPreloader, setPreloader] = useState(false);

    const WithPreloaderAddingLanguages = withPreloader(AddingLanguage);

    const addLanguage = async(values) => {
        if(params.id === props.userId) {
            setPreloader(true);

            let level = values.level ? values.level : null;
            await props.addNewLanguage(props.typeLng, values.language, props.userId, level);

            setPreloader(false);
        }
    }

    const formik = useFormik({
        initialValues: {
            language: '',
            level: '1',
        },
        validationSchema: Yup.object().shape({
            language: Yup.string().required('Required'),
            level: Yup.string().required('Required')
        }),
        onSubmit: values => {
            addLanguage(values);
        },
    })

    let languages = [];

    if(props.languages.length === 1) {
        props.setAllLanguages();
    } else {
        languages = props.languages.map(value => {return {_id: value._id, name: value.native}});
    }

    return (
        <>
            {console.log("without hoc")}
            <AddingLanguage isLevel={props.isLevel} languages={languages} formik={formik} />
        
        </>
        // <WithPreloaderAddingLanguages isLevel={props.isLevel} languages={languages} formik={formik} 
        //     isPreloader={isPreloader} />
        
    );
};

const mapStateToProps = state => {
    return {
        languages: state.lngReducer.languages,
        userId: state.profilePage.profile._id,
    }
}

export default connect(
    mapStateToProps,
    {setAllLanguages, addNewLanguage}
)
(AddingLanguageContainer);