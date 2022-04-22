import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from '../actions/TodoActions';

export const initialState = {
    tasks: [],
    button: false,
};

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                tasks: [...state.tasks, action.payload],
                button: false,
            };
        }

        case REMOVE_TASK: {
            const filtradas = state.tasks.filter(
                (tarea) => tarea.id !== action.payload
            );
            return {
                tasks: filtradas,
                button: false,
            };
        }

        case EDIT_TASK: {
            const todoEdit = action.payload;
            return state.map((tarea) =>
                tarea.id === todoEdit.id ? todoEdit : tarea
            );
        }

        default:
            state;
    }
};
