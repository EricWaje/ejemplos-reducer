import React, { useReducer, useState } from 'react';
import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    REMOVE_TASKS,
} from '../../actions/TodoActions';
import { initialState, TodoReducer } from '../../reducers/TodoReducer';
import './TodoApp.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);
    const { tasks, button, taskToEdit } = todos;

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

    const handleChange = (e) => {
        setText(e.target.value);
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

    const clearAll = () => {
        dispatch({
            type: REMOVE_TASKS,
        });
    };

    return (
        <div className="contenedorPadre">
            <h2>useReducer en TodoList 📝</h2>
            <div>
                <TodoForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    button={button}
                    text={text}
                    taskToEdit={taskToEdit}
                />
            </div>
            {tasks.length === 0 ? (
                <h1>Aún no hay tareas</h1>
            ) : (
                <div className="containerTasks">
                    <TodoList
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        tasks={tasks}
                    />
                    <button className="deleteAll" onClick={clearAll}>
                        Eliminar todas las tareas
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoApp;
