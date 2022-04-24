import React, { memo } from 'react';
import Info from './Info';

const Character = memo(({ characters }) => {
    return (
        <div className="charactersList">
            {characters.map((character) => (
                <Info key={character.id} {...character} />
            ))}
        </div>
    );
});

export default Character;
