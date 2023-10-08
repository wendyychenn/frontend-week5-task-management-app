import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function Todos() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
  }

  function removeTask(job) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== job.id;
    });

    setTasks(updatedTasks);
  }

  function toggleDone(job) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === job.id) {
        task.done = !task.done;

        return task;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            remove={removeTask}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}
