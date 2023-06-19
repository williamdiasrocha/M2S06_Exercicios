import React, { useState, useEffect } from 'react';
import Task from './Task';
import Formulario from './Formulario';


const ToDo = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
