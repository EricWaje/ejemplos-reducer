import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  REMOVE_TASKS,
} from '../actions/TodoActions';

export const initialState = {
  tasks: [],
  button: false,
  taskToEdit: {},
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks: [...state.tasks, action.payload],
        button: false,
        taskToEdit: {},
      };
    }

    case REMOVE_TASK: {
      const filtradas = state.tasks.filter(
        (tarea) => tarea.id !== action.payload
      );
      return {
        tasks: filtradas,
        button: false,
        taskToEdit: {},
      };
    }

    case EDIT_TASK: {
      const todoEdit = action.payload;
      const editTask = state.tasks.find((tarea) => tarea.id === todoEdit.id);
      const tareas = state.tasks.filter((tarea) => tarea.id !== todoEdit.id);

      return {
        tasks: tareas,
        button: true,
        taskToEdit: editTask,
      };
    }
    case REMOVE_TASKS: {
      return {
        tasks: [],
        button: false,
        taskToEdit: {},
      };
    }

    default:
      state;
  }
};
