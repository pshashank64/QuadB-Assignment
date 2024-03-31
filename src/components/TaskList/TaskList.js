import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';
import "./TaskList.css"

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  //used to view the tasks as a popup on screen
  const [expandedTask, setExpandedTask] = useState(null);


  //dispaches the delete function
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  //checks and does the completion and text strike-through over the tasks
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  //views the tasks as a popup
  const toggleExpand = (id) => {
    if (expandedTask === id) {
      setExpandedTask(null);
    } else {
      setExpandedTask(id);
    }
  };

  return (
    <table className='list'>

      {/* Maps through all the tasks and help in display of the TODOs */}
        {tasks.map(task => (
          <tr key={task.id} className={task.completed ? 'completed' : ''}>
            <td><span>{task.text.length > 100 ? `${task.text.substring(0, 100)}......` : task.text}</span></td>

            {/* All the buttons to view, mark as completed and delete the tasks */}
            <td>
              <button className="btn btn-secondary" onClick={() => toggleExpand(task.id)}><i class="fa-solid fa-eye"></i></button>
              {!task.completed && (
                <button className="btn btn-secondary" onClick={() => handleToggle(task.id)}><i class="fa-solid fa-check-double"></i></button>
              )}
              <button className="btn btn-secondary" onClick={() => handleDelete(task.id)}><i class="fa-solid fa-trash-can"></i></button>
            </td>

            {/* The popup logic to view the task as full description */}
            {expandedTask === task.id && (
            <div className="modal-overlay">
              <div className="modal-content">
                <span className="close" onClick={() => toggleExpand(task.id)}><i class="fa-regular fa-circle-xmark"></i>;</span>
                <p>{task.text}</p>
              </div>
            </div>
          )}
          </tr>
        ))}
    </table>
    
  );
}

export default TaskList;
