import React from 'react';
import ToDo from './components/ToDo';

const App = () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ToDo tasks={tasks} />
    </div>
  );
};

export default App;