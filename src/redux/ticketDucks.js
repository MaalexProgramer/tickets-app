import Axios from "axios";

// * Constants
const initialState = {
    objet : {}
}

// * Types
const GET_TICKETS_SUCCESSFULLY = 'GET_TICKETS_SUCCESSFULLY';

// * Reducer
export default function ticketReducer( state = initialState, action){
    switch(action.type){    
        case GET_TICKETS_SUCCESSFULLY:
            return {...state,array: action.payload}
        default:
            return state
    }
}

// * Actions
export const getTickets = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get('');
        dispatch({
            type: GET_TICKETS_SUCCESSFULLY,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
}