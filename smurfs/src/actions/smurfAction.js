import axios from "axios";

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

//makes a call to randomSMURF api and returns media of a SMURF when succesful
export const fetchSmurf = () => dispatch =>{
    dispatch({type:FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
    .then(response =>{
        dispatch({type:FETCH_SMURF_SUCCESS, payload: response.data});
    })
    .catch(err =>{
        dispatch({type:FETCH_SMURF_FAILURE, payload: err})
    })
}

export const postSmurf = (smurf) => dispatch =>{
    dispatch({type:POST_SMURF_START});
    axios.post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log("success", res);
            })
            .catch(err => {
                console.log(err.res);
            });
}

