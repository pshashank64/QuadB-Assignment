//these are different types of actions that need to be performed
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS'; 


// creates an action to load tasks into the Redux store.
export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks
});


// It takes the text of the task as input and returns an 
//action object with the type ADD_TASK, along with an object payload 
//containing the task's ID, text, and completion status (initialized as false).
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    text,
    completed: false
  }
});


//It takes the ID of the task to be deleted as input and returns an action object
//with the type DELETE_TASK and the payload containing the ID of the task.
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});


export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});