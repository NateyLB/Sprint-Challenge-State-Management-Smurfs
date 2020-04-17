import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
} from '../actions/smurfAction.js'

export const initialState = { smurfs: [], isFetching: false, isPosting: false, error: '' };

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            console.log('FETCH_SMURF_START')
            return { ...state, isFetching: true }
        case FETCH_SMURF_SUCCESS:
            console.log('FETCH_SMURF_SUCCESS')
            return { ...state, smurfs: action.payload, isFetching: false, error: "" }
        case FETCH_SMURF_FAILURE:
            console.log('FETCH_SMURF_ERROR')
            return { ...state, isFetching: false, error: action.payload }
        // case POST_SMURF_START:
        //     console.log('POST_SMURF_START')
        //     return { ...state, isFetching: true }
        // case FETCH_SMURF_SUCCESS:
        //     console.log('FETCH_SMURF_SUCCESS')
        //     return { ...state, smurfs: [...state.smurfs, action.payload], isFetching: false, error: "" }
        // case FETCH_SMURF_FAILURE:
        //     console.log('FETCH_SMURF_ERROR')
        //     return { ...state, isFetching: false, error: action.payload }
        default:
            return state;
    }
}