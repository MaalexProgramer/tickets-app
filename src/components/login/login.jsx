import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { doLogin } from './../../redux/userDucks'

const Login = () => {


    const { register, errors, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const store = useSelector(store => store.user.errors);
    const userToken =  localStorage.getItem('user-token');
    console.log(store)

    const processForm = (data, e) => {
        dispatch(doLogin(data));
        e.target.reset();
    }

    return (
        <Fragment>
           {userToken && <Redirect to="/" />}
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div id="login">
                        <div className="myform form">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(processForm)}>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        ref={
                                            register({
                                                required: { value: true, message: 'enter your email' },
                                                pattern: { value: /^\S+@\S+$/i, message: 'email does not meet the pattern' }
                                            })
                                        }
                                        className="form-control"
                                        placeholder="Enter email" />
                                    {
                                        errors.email &&
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors?.email?.message}
                                        </span>
                                    }
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
                                    {
                                        errors.password &&
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors?.password?.message}
                                        </span>
                                    }
                                </div>

                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                </div>


                                <div className="form-group">
                                    <p className="text-center">Don't have account? <Link to="/signup">Sign up here</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default Login;