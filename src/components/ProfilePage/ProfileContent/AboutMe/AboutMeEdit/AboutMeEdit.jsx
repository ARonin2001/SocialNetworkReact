import React from 'react';

import Input from './../../../../Input/Input';
import RadioButton from '../../../../RadioCheckButton/RadioCheckButton';

import './AboutMeEdit.css';
import Select from '../../../../Select/Select';

const AboutMeEdit = ({ formik, ...props }) => {
    const anotherTypeInputs = ["dateBirth", "city", "location", "gender"];

    return (
        <div className="about-me__edit">
            <div className="about-me__edit-container">
                <form id="aboutm-me__form" className='aboutm-me__form' onSubmit={formik.handleSubmit}>
                    {
                        Object.entries(formik.values).map((item, key) => {
                            if (!anotherTypeInputs.includes(item[0])) {
                                return (
                                    <div className="about-me__inputs">
                                        <Input key={key} title={item[0]} type={"text"} name={item[0]} onChange={formik.handleChange} value={formik.values[item[0]]} errors={formik.errors} />
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="about-me__inputs">
                        <Input key={"dateBirth"} title={"Date of birth"} type={"date"} name={"dateBirth"} onChange={formik.handleChange} value={formik.values.dateBirth} errors={formik.errors} />
                    </div>
                    {/* gender */}
                    <div className="about-me__inputs">
                        <div className="about-me__gender-title">{formik.values.gender}</div>
                        
                        <RadioButton title={"male"} type={"radio"} name={"gender"} ID={"radio-m"} change={formik.handleChange} errors={formik.errors} />
                        <RadioButton title={"woman"} type={"radio"} name={"gender"} ID={"radio-w"} change={formik.handleChange} errors={formik.errors} />
                    </div>

                    {/* country and city */}
                    {/* <div className="about-me__inputs">
                        {
                            <Select title={select.title} name={select.name} values={select.values} errors={props.errors} change={props.handleChange} value={props.values[select.name]} />
                        }
                    </div> */}

                    <button className="about-me__btn btn" type={"submit"}>SAVE</button>
                </form>

            </div>
        </div>
    );
};

export default AboutMeEdit; 