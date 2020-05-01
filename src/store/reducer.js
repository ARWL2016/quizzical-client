import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    // if (action.type === 'INCREMENT') {

    // }

    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat([state.counter])
            }
        case actions.DELETE_RESULT:
            // let newResults = [...state.results];
            // newResults.splice(action.value, 1);

            return {
                ...state,
                results: state.results.filter((res, idx) => idx !== action.value)
            }
    }

    return state;
};

export default reducer;



