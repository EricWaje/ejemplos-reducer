import { SET_CHARACTERS, SET_ERROR } from '../actions/FetchActions';

export const initialState = {
    data: {},
    loading: true,
    error: false,
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

        case SET_ERROR:
            return {
                data: {},
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};
