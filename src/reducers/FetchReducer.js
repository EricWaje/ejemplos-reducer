import { SET_CHARACTERS } from '../actions/FetchActions';

export const initialState = {
    data: {},
    loading: true,
    error: true,
};

export const fetchReducer = (state, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                data: {
                    info: action.payload.info,
                    results: action.payload.results,
                },
                loading: false,
                error: false,
            };

        default:
            return state;
    }
};
