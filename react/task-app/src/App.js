import { useState } from "react";
import { Overview } from "./components/Overview";
import ReactDOM from "react-dom/client";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
    console.log(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };
  
  return (
    <div>
      <Overview tasks={tasks} />
      <form onSubmit={addTask}>
        <label htmlFor="task">New task</label>
        <input
          value={newTask}
          type="text"
          id="task"
          onChange={handleTaskInput}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
