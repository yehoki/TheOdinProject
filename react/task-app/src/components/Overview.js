import React from "react";

export const Overview = (props) => {
  const taskList = props.tasks.map((task) => {
    return <li key={task}>{task}</li>;
  });
  return <ul>{taskList}</ul>;
};
