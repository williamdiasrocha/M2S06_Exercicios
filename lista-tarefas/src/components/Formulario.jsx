import React, { useRef } from 'react';

const Formulario = ({ onAddTask }) => {
  const taskInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskName = taskInputRef.current.value.trim();
    if (taskName !== '') {
      onAddTask({ name: taskName, completed: false });
      taskInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={taskInputRef}
        placeholder="Digite o nome da tarefa"
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default Formulario;
