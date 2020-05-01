import * as actions from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(action.value)
            }
        case actions.DELETE_RESULT:

            return {
                ...state,
                results: state.results.filter((res, idx) => idx !== action.value)
            }
    }

    return state;
};

export default reducer;



