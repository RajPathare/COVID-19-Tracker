import corona from '../api/corona';


export const fetchList = () => {
    
    return async (dispatch, getState) => {
        const response = await corona.get('/v2/countries?sort=cases');

        dispatch({ type:'FETCH_LIST', payload: response.data })
    } 
}

export const fetchTotalCases = () => {
    return async (dispatch, getState) => {
        const response = await corona.get('/v2/all');

        dispatch({ type:'FETCH_TOTAL', payload: response.data })
    } 
}