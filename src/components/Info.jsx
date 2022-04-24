import React from 'react';

const Info = ({ name, gender, image, status, location }) => {
    return (
        <div className="info">
            <div>
                <img src={image} alt={name} />
            </div>
            <div className="infoData">
                <h3 className="infoName">{name}</h3>
            </div>
        </div>
    );
};

export default Info;
