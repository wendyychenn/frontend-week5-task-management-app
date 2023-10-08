import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [duty, setDuty] = useState("");

  function handleDutyChange(e) {
    setDuty(e.target.value);
    console.log(duty);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      duty,
      done: false,
      id: nanoid()
    };
    props.addTask(newTask);
    //reset title and artist
    setDuty("");
  }
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task..."
          onChange={handleDutyChange}
          value={duty}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
