/* 

const initialState = {
    favourite: {
        content: []
    }
};

const mainReducer = (state = initialState, action) => {

    switch (action.type) {


        case 'ADD_FAVS':
            return {
                ...state,
                favourite: {
                    ...state.favourite,
                    content: [...state.favourite.content, action.payload]
                }
            }
        default:
            return state;
    }


}

export default mainReducer */