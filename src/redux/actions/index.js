

export const ADD_FAV = 'ADD-FAV';

export const GET_JOBS = 'GET_JOBS'

export const addFavAction = (job) => ({ type: ADD_FAV, payload: job })



export const getJobsAction = (query) => {
    return async (dispatch, getState) => {
        console.log("GET STATE", getState());
        try {
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
            if (response.ok) {


                let fetchedJobs = await response.json()
                dispatch({ type: GET_JOBS, payload: fetchedJobs })
            } else {
                throw new Error("Errore nel reperimento dei dati 😥");
            }
        } catch (error) {
            console.log(error);

        } /* finally {
            dispatch({ type: GET_BOOKS_LOADING_OFF });
        } */
    };
};
