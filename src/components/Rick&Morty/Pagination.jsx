import React, { useState } from 'react';

const Pagination = ({ pag, handlerUrl }) => {
    const [count, setCount] = useState(1);
    const handleNext = () => {
        const nextPag = pag.next.split('?');
        const [, url] = nextPag;
        handlerUrl(url);
        count < 42 && setCount(count + 1);
    };

    const handlePrev = () => {
        const prevPag = pag.prev.split('?');
        const [, url] = prevPag;
        handlerUrl(url);
        count > 0 && setCount(count - 1);
    };

    /* const numeracion = () => {
        const nextPag = pag.next.split('?');
        const [, url] = nextPag;
        const [, num] = url.split('=');
    }; */

    console.log(pag);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div>
                <button
                    disabled={pag.prev === null}
                    onClick={handlePrev}
                    className="btn"
                >
                    Prev
                </button>
                <button
                    disabled={count === 42}
                    onClick={handleNext}
                    className="btn"
                >
                    Next
                </button>
            </div>
            <p
                style={{
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    border: 'none',
                }}
            >
                {count} de {pag.pages}
            </p>
        </div>
    );
};

export default Pagination;
