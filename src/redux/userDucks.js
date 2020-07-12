import Axios from "axios";

// * Constants

const initialState = {
    auth: false,
    dataUser: {},
    errors: {},
    token: ''
}

// * Types
const LOGIN_SIGNUP_SUCCESSFULLY = 'LOGIN_SIGNUP_SUCCESSFULLY';
const ERRORS = 'ERRORS';

// * Reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ERRORS:
            return { ...state, dataUser: {}, errors: action.payload, auth: false, token: '' }
        case LOGIN_SIGNUP_SUCCESSFULLY:
            return { ...state, dataUser: action.payload.user, errors: {}, auth: action.payload.auth, token: action.payload.token }
        default:
            return state
    }
}

// * Actions
export const doLogin = (data) => async (dispatch, getState) => {
    try {
        const res = await Axios.post('http://localhost:4000/api/auth/login', {
            email: data.email,
            password: data.password
        });

        if (res.data.errors) {
            localStorage.setItem('errors', JSON.stringify(res.data));
            dispatch({
                type: ERRORS,
                payload: res.data.errors
            });
        } else {
            localStorage.removeItem('errors');
            localStorage.setItem('identity', JSON.stringify(res.data));
            localStorage.setItem('user-token', JSON.stringify(res.data.token));
            dispatch({
                type: LOGIN_SIGNUP_SUCCESSFULLY,
                payload: res.data
            });
        }

    } catch (err) {
        console.log(err);
    }
}

export const doSignup = (data) => async (dispatch, getState) => {
    try {
        const res = await Axios.post('http://localhost:4000/api/auth/signup', {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        });

        if (res.data.errors) {
            localStorage.setItem('errors', JSON.stringify(res.data));
            dispatch({
                type: ERRORS,
                payload: res.data
            });
        } else {
            localStorage.removeItem('errors');
            localStorage.setItem('identity', JSON.stringify(res.data));     
            localStorage.setItem('user-token', JSON.stringify(res.data.token));      
            dispatch({
                type: LOGIN_SIGNUP_SUCCESSFULLY,
                payload: res.data
            });
        }

    } catch (err) {
        console.log(err);
    }
}

