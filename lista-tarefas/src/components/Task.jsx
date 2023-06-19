import React from 'react';

const Task = ({ task, onToggleComplete }) => {
  const handleToggle = () => {
    onToggleComplete(task);
  };

  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.name}
      </span>
      <button onClick={handleToggle}>
        {task.completed ? 'Não Concluído' : 'Concluído'}
      </button>
    </li>
  );
};

export default Task;