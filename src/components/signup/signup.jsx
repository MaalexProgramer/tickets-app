import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,Redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { doSignup } from './../../redux/userDucks'

const Signup = () => {


    const { register, errors, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const store = useSelector(store => store.user.errors);
    const userToken =  localStorage.getItem('user-token');

    console.log(store)

    const processForm = (data, e) => {
        dispatch(doSignup(data));

        e.target.reset();
    }

    return (
        <Fragment>
            {userToken && <Redirect to="/" />}
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div id="signup">
                        <div className="myform form">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Signup</h1>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(processForm)}>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full name</label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        ref={
                                            register({
                                                required: { value: true, message: 'enter your full name' }
                                            })
                                        }
                                        className="form-control"
                                        placeholder="Enter fullname" />
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors?.fullname?.message}
                                    </span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        ref={
                                            register({
                                                required: { value: true, message: 'enter your email' }
                                            })
                                        }
                                        className="form-control"
                                        placeholder="Enter email" />
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors?.email?.message}
                                    </span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        ref={
                                            register({
                                                required: { value: true, message: 'enter your password' }
                                            })
                                        }
                                        className="form-control"
                                        placeholder="Enter Password" />
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors?.password?.message}
                                    </span>
                                </div>

                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Signup</button>
                                </div>


                                <div className="form-group">
                                    <p className="text-center">Already have an account? <Link to='/login' >Login here</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default Signup;