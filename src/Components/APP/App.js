import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBar } from "../NavBar/NavBar";
import { TodayProgress } from "../Progress/TodayProgress";
import TasksForToday from "../TasksForToday/TasksForToday";
import TaskStats from "../Stat/TasksStats";
import { useState } from "react";
import { getCompletedTasks, getTodayTasks } from "../../Utils/taskUtils";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./app.css";
export default function App() {
  const tasks = [
    {
      id: 1,
      title: "Finish website redesign",
      category: "Work",
      time: "09:30 AM",
      dueDate: "2026-11-22",
      completed: true,
    },
    {
      id: 2,
      title: "prepare presentation slides",
      category: "Work",
      time: "11:00 AM",
      dueDate: "2026-11-20",

      completed: false,
    },
    {
      id: 3,
      title: "Grocery shopping",
      category: "Shopping",
      time: "02:00 PM",
      dueDate: "2026-11-22",

      completed: false,
    },
    {
      id: 4,
      title: "Morning workout",
      category: "Personal",
      time: "07:00 AM",
      dueDate: "2026-11-21",

      completed: true,
    },
    {
      id: 5,
      title: "Design system updates",
      category: "Design",
      time: "04:00 PM",
      dueDate: "2026-11-22",

      completed: true,
    },
  ];
  const [toggleTasks, setToggleTasks] = useState(getTodayTasks(tasks));
  const [allTasks, setAllTasks] = useState(tasks);
  function onToggleTask(id) {
    setToggleTasks(() =>
      toggleTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
    setAllTasks(() =>
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  const tasksLength = toggleTasks.length;
  const completedTasksLength = getCompletedTasks(toggleTasks).length;
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        <DashboardHeader />
        <div className="mainTasks-container">
          <TodayProgress
            completedTasks={completedTasksLength}
            totalTasks={tasksLength}
          />
          <TasksForToday todayTasks={toggleTasks} onToggleTask={onToggleTask} />
          <TaskStats tasks={allTasks} />
        </div>
      </div>
    </div>
  );
}
