export default function TaskItem({ task, onToggleTask }) {
  return (
    <div className="task-item">
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
      </label>

      <div className="task-details">
        <div className="task-main-info">
          <span className={`task-name ${task.completed ? "completed" : ""}`}>
            {task.title}
          </span>

          <span className="task-time">{task.time}</span>
        </div>

        <span
          className={`task-category category-${task.category.toLowerCase()}`}
        >
          {task.category}
        </span>
      </div>
    </div>
  );
}
