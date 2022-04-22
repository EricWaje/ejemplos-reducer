import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'suma':
            return state + 1;
        case 'resta':
            return state - 1;

        default:
            return state;
    }
};

const Counter = () => {
    const [counter, dispatch] = useReducer(counterReducer, 0);

    //se puede llamar al dispatch desde una función
    const resta = () => {
        dispatch({
            type: 'resta',
        });
    };

    return (
        <div
            style={{
                backgroundColor: 'hsl(39, 87%, 61%)',
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>useReducer en un contador 🤔</h2>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* se puede llamar al dispatch directo desde el onClick */}
                <button
                    onClick={() =>
                        dispatch({
                            type: 'suma',
                        })
                    }
                >
                    +
                </button>
                <p
                    style={{
                        width: '50px',
                        textAlign: 'center',
                        fontSize: '20px',
                    }}
                >
                    {counter}
                </p>
                <button onClick={resta}>-</button>
            </div>
        </div>
    );
};

export default Counter;
