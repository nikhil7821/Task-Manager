import React, { useState, useEffect } from 'react';

const TaskForm = ({ dispatch, tasks, editTask, setEditTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title || '');
      setDescription(editTask.description || '');
      setDueDate(editTask.dueDate || '');
      setPriority(editTask.priority || 'Low');
    }
  }, [editTask]);

  const handleAddTask = () => {
    if (!title || !description || !dueDate) {
      setError('All fields are required');
      return;
    }

    if (tasks.some(task => task.title === title && task !== editTask)) {
      setError('Task title must be unique');
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    if (editTask) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { index: tasks.indexOf(editTask), updatedTask: newTask },
      });
      setEditTask(null);
    } else {
      dispatch({ type: 'ADD_TASK', payload: newTask });
    }

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
    setError('');
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask}>
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TaskForm;
