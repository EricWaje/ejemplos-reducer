import React from 'react';

const TodoList = ({ tasks, handleEdit, handleDelete }) => {
    return (
        <>
            {tasks?.length > 0 && (
                <>
                    {tasks?.map((tarea) => (
                        <div className="tasks" key={tarea.id}>
                            <p>{tarea.title}</p>

                            <div>
                                <button
                                    className="edit"
                                    onClick={() => handleEdit(tarea)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="remove"
                                    onClick={() => handleDelete(tarea.id)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

export default TodoList;
