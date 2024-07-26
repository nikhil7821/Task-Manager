import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const initialState = {
  tasks: [],
  search: '',
  filter: 'all',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
    case 'EDIT_TASK':
      const updatedTasks = state.tasks.map((task, index) =>
        index === action.payload.index ? action.payload.updatedTask : task
      );
      return { ...state, tasks: updatedTasks };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'SEARCH_TASKS':
      return { ...state, search: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editTask, setEditTask] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const filteredTasks = state.tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(state.search.toLowerCase());
    const matchesFilter =
      state.filter === 'all' ||
      (state.filter === 'completed' && task.completed) ||
      (state.filter === 'high' && task.priority === 'High') ||
      (state.filter === 'medium' && task.priority === 'Medium') ||
      (state.filter === 'low' && task.priority === 'Low') ||
      (state.filter === 'done' && task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1>Task List View</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
           {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <div className="task-controls">
        <button className="add-task-btn" onClick={() => setEditTask({})}>Add New Task</button>
        <div className="filter-buttons">
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'high' })}>High</button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'medium' })}>Medium</button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'low' })}>Low</button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'done' })}>Done</button>
        </div>
      </div>
      <TaskForm dispatch={dispatch} tasks={state.tasks} editTask={editTask} setEditTask={setEditTask} />
      <input
        type="text"
        placeholder="Search tasks"
        value={state.search}
        onChange={(e) => dispatch({ type: 'SEARCH_TASKS', payload: e.target.value })}
        className="search-input"
      />
      <TaskList tasks={filteredTasks} dispatch={dispatch} setEditTask={setEditTask} />
    </div>
  );
}

export default App;
