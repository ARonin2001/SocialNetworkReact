import React from "react";
import { connect } from "react-redux";

import AsideUser from './AsideUser';

const AsideUserContainer = (props) => {
    return (
        <AsideUser isAuth={props.isAuth} />
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(
    mapStateToProps,
    null
)
(AsideUserContainer);