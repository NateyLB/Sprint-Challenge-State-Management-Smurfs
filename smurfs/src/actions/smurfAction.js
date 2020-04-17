import axios from "axios";

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
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
                console.log("POST success", res);
                window.location.reload()
            })
            .catch(err => {
                console.log(err.res);
            });
}

export const deleteSmurf =(smurfID) => dispatch =>{
    console.log('in deleteSMURF', smurfID)

axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
.then(res => {
    console.log("DELETE success", res);
    window.location.reload()
})
.catch(err => {
    console.log(err.res);
});
}

