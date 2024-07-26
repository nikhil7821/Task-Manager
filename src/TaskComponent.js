import React from 'react';

const TaskComponent = ({ task, index, dispatch, setEditTask, isExpanded, toggleTaskDetails }) => {
  const handleEdit = () => {
    setEditTask(task);
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: index });
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="task-header" onClick={toggleTaskDetails}>
        <span>{task.title}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <div className="task-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleToggleComplete}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskComponent;
