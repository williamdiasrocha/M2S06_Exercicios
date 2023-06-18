import React from "react";
import Task from "./Task";

const ToDo = (props) => {
    const { tasks } = props;

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
            <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
