import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import "./TaskInput.css"

function TaskInput() {
  //state of text (tasks)
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };


  //submits the todo tasks if not empty and dispaches it
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTask(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={handleChange}
        />
        <button className='btn btn-primary add-task' type="submit">Add Task</button>
      </div>
      
    </form>
  );
}

export default TaskInput;
