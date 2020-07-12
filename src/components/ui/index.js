import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";

import Infouser from './infouser';
import Carddata from './carddata';

const Uiuser = () => {

    const userToken = localStorage.getItem('user-token');

    const identity = JSON.parse(localStorage.getItem('identity'));

    return (
        <Fragment>
            {!userToken && <Redirect to="/login" />}
            <div className="row">
                <div className="col-12 text-center col-sm-6 text-sm-left col-md-3">
                { identity?.user && <Infouser fullname={identity.user.fullname} email={identity.user.email} role={identity.role} />}
                </div>
                <div className="col">
                   <Carddata />
                 </div>
            </div>
        </Fragment >
    );
}

export default Uiuser;