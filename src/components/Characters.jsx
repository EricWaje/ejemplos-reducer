import React, { useState } from 'react';
import { useFetch } from '../customHook/useFetch';
import Character from './Character';
import './Characters.css';
import Pagination from './Pagination';

const Characters = () => {
    const [url, setUrl] = useState('character');
    const { loading, data } = useFetch(url);

    const handlerUrl = (newUrl) => {
        const changedUrl = `character?${newUrl}`;
        setUrl(changedUrl);
    };
    return (
        <div className="charactersContainer">
            <h2>useReducer + customHook (useFetch 😎)</h2>
            {loading ? (
                <h3>Cargando Personajes....</h3>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Pagination pag={data.info} handlerUrl={handlerUrl} />
                    <Character characters={data.results} />
                </div>
            )}
        </div>
    );
};

export default Characters;
