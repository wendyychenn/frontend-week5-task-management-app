export default function Todo(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleDone(task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.done}
            />
            {task.done === true ? <del>{task.duty}</del> : task.duty}
          </span>
        </p>
      </div>
      <div className="remove" onClick={handleDelete}>
        remove
      </div>
    </li>
  );
}
