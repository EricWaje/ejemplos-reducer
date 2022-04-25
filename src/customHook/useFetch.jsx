import React, { useReducer, useEffect, useCallback } from 'react';
import { SET_CHARACTERS } from '../actions/FetchActions';
import { BASE_URL } from '../constants/constants';
import { fetchReducer, initialState } from '../reducers/FetchReducer';

export const useFetch = (URL) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const fetchData = useCallback(async () => {
        try {
            const data = await fetch(`${BASE_URL}/${URL}`);
            const response = await data.json();
            dispatch({
                type: SET_CHARACTERS,
                payload: response,
            });
        } catch (error) {
            dispatch({
                type: SET_ERROR,
            });
        }
    }, [URL]);

    useEffect(() => {
        fetchData(URL);
    }, [URL, fetchData]);

    return state;
};
