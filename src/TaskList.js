import React, { useState } from 'react';
import TaskComponent from './TaskComponent';

const TaskList = ({ tasks, dispatch, setEditTask }) => {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);

  const toggleTaskDetails = (index) => {
    setExpandedTaskIndex(expandedTaskIndex === index ? null : index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskComponent
          key={index}
          task={task}
          index={index}
          dispatch={dispatch}
          setEditTask={setEditTask}
          isExpanded={expandedTaskIndex === index}
          toggleTaskDetails={() => toggleTaskDetails(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
