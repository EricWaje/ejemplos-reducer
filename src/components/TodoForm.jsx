import React from 'react';

const TodoForm = ({ handleSubmit, button, handleChange, text, taskToEdit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={handleChange}
                placeholder={!button ? 'Tarea' : taskToEdit.title}
                style={{
                    border: !button ? '3px solid #fff' : '3px solid #244fe4',
                }}
            />
            <button
                className="buttonAdd"
                style={{
                    backgroundColor: !button ? null : 'green',
                    color: !button ? null : 'white',
                }}
                disabled={taskToEdit.title === '' || text === ''}
            >
                {!button ? 'Add' : 'Edit'}
            </button>
        </form>
    );
};

export default TodoForm;
