import React, { Fragment, useState } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";


const Infouser = ({ fullname, email, role }) => {

    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        localStorage.clear();
        history.push('/login');
    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{fullname} <span className="badge badge-success">{role}</span></h5>
                    <p className="card-text">{email}</p>
                    <button type="button" className="btn btn-sm " onClick={handleLogout} >Logout</button>
                </div>
            </div>
        </Fragment >
    );
}

export default Infouser;