import ProgressBar from "./ProgressBar";
import CircularProgress from "./CircularProgress";
import "./progress.css";

export function TodayProgress({ completedTasks, totalTasks, onAddTask }) {
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="today-progress-card">
      <h3 className="progress-card-title">Today's Progress</h3>

      <div className="progress-content">
        <div className="progress-info">
          <h2>Today's Progress</h2>
          <p>
            {completedTasks} of {totalTasks} tasks completed
          </p>
        </div>
        <CircularProgress progress={progress} />
      </div>
      <ProgressBar progress={progress} />
      <div className="progress-message">
        <p>Keep going!</p>
        <p>You're doing great today.</p>
      </div>

      <button className="add-task-button" onClick={onAddTask}>
        <span className="plus-icon">+</span>
        Add New Task
      </button>
    </div>
  );
}
