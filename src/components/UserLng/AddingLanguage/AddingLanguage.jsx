import React from "react";
import Select from "../../Select/Select";

import './AddingLanguage.css';

const AddingLanguage = ({ formik, languages, ...props }) => {
    const levels = [
        { _id: 1, name: 1 },
        { _id: 2, name: 2 },
        { _id: 3, name: 3 },
    ]

    return (
        <div className="add-lng">
            <div className="add-lng__container">
                <div className="block p-13">
                    <h3 className="add-lng__title title">Add language</h3>
                    <form onSubmit={formik.handleSubmit} id={"add-lng__form"} className="add-lng__form">
                        <div className="add-lng__section">
                            <Select title={"Languages"} name={"language"} values={languages} errors={formik.errors} change={formik.handleChange} value={formik.values.language} />
                        </div>

                        {
                            props.isLevel &&
                                <div className="add-lng__section">
                                    <Select title={"Language level"} name={"level"} values={levels} errors={formik.errors} change={formik.handleChange} value={formik.values.level} />
                                </div>
                        }

                        <button className="btn add-lng__btn" type="submit">ADD</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddingLanguage;