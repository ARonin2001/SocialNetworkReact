import React from "react";
import Select from "../../Select/Select";
import Input from "../../Input/Input";

import '../Auth.css';
import RadioButton from "../RadioCheckButton/RadioCheckButton";
import InputRow from "../../InputRow/InputRow";

const Register = ({selects, inputs, ...props}) => {
    return (
        <>
            {/* name and lastName */}   
            <InputRow inputs={inputs.rows[0]} change={inputs.methods.change} errors={inputs.values.errors} />
            
            {/* password (email) and login */}
            <InputRow inputs={inputs.rows[1]} change={inputs.methods.change} errors={inputs.values.errors} />

            {/* country and city */}
            <div className="auth__selects auth__section-row">
                {
                    selects.map(select => {
                        return (
                            <Select title={select.title} name={select.name} values={select.values} selectId={select.name} errors={props.errors} change={props.handleChange} value={props.values[select.name]}/>
                        )
                    })
                }
            </div>

            {/* date of birth */}
            <div className="auth__date-time auth__section-row">
                <Input title={"DateBirth"} type={"date"} name={"dateBirth"} inputId={"datebirth"} onChange={props.handleChange} value={props.values.dateBirth} errors={props.errors} />
            </div>

            {/* gender */}
            <div className="auth__ceckboxes">
                <RadioButton title={"male"} type={"radio"} name={"gender"} ID={"radio-m"} change={props.handleChange} errors={props.errors} />
                <RadioButton title={"woman"} type={"radio"} name={"gender"} ID={"radio-w"} change={props.handleChange} errors={props.errors} />
            </div>
        </>
    );
};

export default Register;