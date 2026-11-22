import {
  getPendingTasks,
  getOverdueTasks,
  getCompletedTasks,
} from "../../Utils/taskUtils";
import StateItem from "./StateItem";
import "./stat.css";
export default function TaskStats({ tasks }) {
  const completedTasks = getCompletedTasks(tasks);

  const pendingTasks = getPendingTasks(tasks);

  const overdueTasks = getOverdueTasks(tasks);
  const stats = [
    {
      id: 1,
      title: "Completed",
      count: completedTasks.length,
      className: "completed-stat",
      icon: "◷",
    },
    {
      id: 2,
      title: "Pending",
      count: pendingTasks.length,
      className: "pending-stat",
      icon: "◷",
    },
    {
      id: 3,
      title: "Overdue",
      count: overdueTasks.length,
      className: "overdue-stat",
      icon: "⚑",
    },
  ];

  return (
    <div className="task-stats">
      <h2>Stats</h2>

      <div className="stats-list">
        {stats.map((stat) => (
          <StateItem key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
}
