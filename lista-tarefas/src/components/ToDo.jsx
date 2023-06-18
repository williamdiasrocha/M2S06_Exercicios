import React from "react";

const ToDo = (props) => {
    const { tasks } = props;

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
