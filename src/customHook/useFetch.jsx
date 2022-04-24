import React, { useReducer, useEffect, useCallback } from 'react';
import { SET_CHARACTERS } from '../actions/FetchActions';
import { BASE_URL } from '../constants/constants';
import { fetchReducer, initialState } from '../reducers/FetchReducer';

export const useFetch = (URL) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const fetchData = useCallback(async () => {
        const data = await fetch(`${BASE_URL}/${URL}`);
        const response = await data.json();
        //const { results } = response;
        dispatch({
            type: SET_CHARACTERS,
            payload: response,
        });
    }, [URL]);

    useEffect(() => {
        fetchData(URL);
    }, [URL, fetchData]);

    return state;
};
