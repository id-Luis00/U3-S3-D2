import { ADD_FAV } from "../actions";




const initialState = {

    content: []
};



const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                content: [...state.content, action.payload]
            }




        default:
            return state;
    }
};

export default favouriteReducer