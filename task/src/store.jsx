import { createStore } from 'redux';


const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';


export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });


const initialState = {
  tasks: []
};


const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

// Store
const store = createStore(taskReducer);

export default store;