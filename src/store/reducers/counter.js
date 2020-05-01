import * as actions from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }

    }

    return state;
};

export default reducer;



