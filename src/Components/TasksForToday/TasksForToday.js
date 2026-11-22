import { useState } from "react";
import TaskItem from "./TaskItem";
import * as taskUtils from "../../Utils/taskUtils";
import "./tasksForToday.css";
export default function TasksForToday({
  todayTasks,
  onToggleTask,
  onViewAllTasks,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categories = [
    "All Categories",
    ...new Set(todayTasks.map((task) => task.category)),
  ];
  const todayTasksByCategory = taskUtils.getTodayTasksByCategory(
    selectedCategory,
    todayTasks,
  );

  return (
    <div className="tasks-today-card">
      <div className="tasks-today-header">
        <h2>Tasks for Today</h2>

        <select
          className="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          key={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="tasks-list">
        {todayTasksByCategory.map((task) => (
          <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
        ))}
      </div>

      <button className="view-pending-tasks" onClick={onViewAllTasks}>
        View all pending tasks →
      </button>
    </div>
  );
}
