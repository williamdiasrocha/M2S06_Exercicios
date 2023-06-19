import React, { useState, useEffect } from 'react';
import ToDo from './components/ToDo';
import Formulario from './components/Formulario';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (taskToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task === taskToToggle) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    document.title = `Total de Tarefas: ${tasks.length}`;

    return () => {
      document.title = 'Lista de Tarefas';
    };
  }, [tasks]);

  return (
    <div className='container'>
      <h1>Lista de Tarefas</h1>
      <Formulario onAddTask={handleAddTask} />
      <ToDo tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;