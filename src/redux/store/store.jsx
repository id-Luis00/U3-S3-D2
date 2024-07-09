// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione
/* 
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (tra cui il nostro reducer) e restituirà un oggetto di stato che avermo poi all'interno della variabile store.
const store = configureStore({
    reducer: mainReducer
});

export default store; */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobReducer";




const rootReducer = combineReducers({
    favourite: favouriteReducer,
    jobs: jobReducer
})


const store = configureStore({
    reducer: rootReducer
})


export default store