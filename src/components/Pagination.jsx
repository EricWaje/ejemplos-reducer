import React from 'react';

const Pagination = ({ pag, handlerUrl }) => {
    const handleNext = () => {
        const nextPag = pag.next.split('?');
        const [, url] = nextPag;
        handlerUrl(url);
    };

    const handlePrev = () => {
        const prevPag = pag.prev.split('?');
        const [, url] = prevPag;
        handlerUrl(url);
    };

    return (
        <div>
            <button
                disabled={pag.prev === null}
                onClick={handlePrev}
                className="btn"
            >
                Prev
            </button>
            <button onClick={handleNext} className="btn">
                Next
            </button>
        </div>
    );
};

export default Pagination;
