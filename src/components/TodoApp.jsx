import React, { useReducer, useState } from 'react';
import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from '../actions/TodoActions';
import { initialState, TodoReducer } from '../reducers/TodoReducer';

const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);
    const { tasks } = todos;

    const [text, setText] = useState('');
    //    const [textChange, setTextChange] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { id: Date.now(), title: text };
        dispatch({
            type: ADD_TASK,
            payload: newTodo,
        });
        setText('');
    };

    const handleDelete = (id) => {
        dispatch({
            type: REMOVE_TASK,
            payload: id,
        });
    };

    const handleEdit = (tarea) => {
        dispatch({
            type: EDIT_TASK,
            payload: { ...tarea, title: text },
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '70vh',
                backgroundColor: 'hsl(30, 87%, 61%)',
            }}
        >
            <h2>useReducer en TodoList 📝</h2>
            <div>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Tarea"
                        style={{
                            fontSize: '20px',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            border: 'none',
                        }}
                    />
                    <button
                        style={{
                            fontSize: '17px',
                            padding: '8px',
                            width: '40%',
                            borderRadius: '8px',
                            border: 'none',
                        }}
                    >
                        Add
                    </button>
                </form>
            </div>
            <div
                style={{
                    marginTop: '10px',
                    border: '4px solid white',
                    borderRadius: '8px',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                {tasks?.length > 0 && (
                    <>
                        {tasks?.map((tarea) => (
                            <div
                                key={tarea.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '80%',
                                    padding: '0px 12px',
                                }}
                            >
                                <p
                                    style={{
                                        backgroundColor: 'white',
                                        width: '120px',
                                        padding: '8px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    {tarea.title}
                                </p>

                                <div>
                                    <button
                                        style={{
                                            fontSize: '15px',
                                            padding: '8px',
                                            borderRadius: '8px',
                                            border: 'none',
                                            marginRight: '5px',
                                            color: 'white',
                                            backgroundColor: 'green',
                                        }}
                                        onClick={() => handleEdit(tarea)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{
                                            fontSize: '15px',
                                            padding: '8px',
                                            borderRadius: '8px',
                                            border: 'none',
                                            color: 'white',
                                            backgroundColor: '#ff0025',
                                        }}
                                        onClick={() => handleDelete(tarea.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoApp;
