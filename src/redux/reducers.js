import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, LOAD_TASKS } from './actions';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //adds the task to local storage so that it does not gets deleted on reload
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks
      };

    
    //deletes and update the list of tasks in the DOM
    case DELETE_TASK:
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks
      };


    //it makes the action of completed and uncompleted tasks and update the local storage
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks
      };


    //finally load task is done which makes all the task active on the page
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload
      };

    
    default:
      return state;
  }
};

export default reducer;
