import axios from 'axios';

export const SMURF_API_GET = 'SMURF_API_GET';
export const SMURF_API_GET_SUCCESS = 'SMURF_API_GET_SUCCESS';
// export const SMURF_API_FETCH_ERROR = 'SMURF_API_FETCH_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ERROR_MESSAGE = 'SMURF_ERROR_MESSAGE';

export const getSmurfs = () => dispatch => {
    dispatch({type: SMURF_API_GET});
    axios.get('http://localhost:3333/smurfs')
        .then(resp =>{
            //console.log(resp.data);
            dispatch({type: SMURF_API_GET_SUCCESS, payload: resp.data});
            dispatch(SMURF_ERROR_MESSAGE(''));
        }).catch(error => {
            dispatch(SMURF_ERROR_MESSAGE(error.resp.data.Error));
        })
}

export const addSmurf = (smurf) => dispatch => {
    //console.log(smurf);
    if (!smurf.name || !smurf.nickname || !smurf.position) {
        dispatch({type: SMURF_ERROR_MESSAGE, payload:"Name, Position and Nickname needed!"});
    }
            
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=>{
            dispatch({type:ADD_SMURF, payload:{...smurf, id:Date.now() }});
            dispatch(SMURF_ERROR_MESSAGE(""));
        }).catch(err=>{
            dispatch(SMURF_ERROR_MESSAGE(err.response.data.Error));
        });
}
        
export const setErrorText = (err) => {
    return({type:SMURF_ERROR_MESSAGE, payload: err});
        }


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.