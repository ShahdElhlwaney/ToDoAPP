import { getCurrentDate } from "./dateUtils";

export function getTodayTasks(tasks) {
  const currentDate = getCurrentDate();
  return tasks.filter((task) => task.dueDate === currentDate);
}

export function getTodayTasksByCategory(selectedCategory, todayTasks) {
  return selectedCategory === "All Categories"
    ? todayTasks
    : todayTasks.filter((task) => task.category === selectedCategory);
}
export function getCompletedTasks(tasks) {
  return tasks.filter((task) => task.completed);
}
export function getOverdueTasks(tasks) {
  const today = getCurrentDate();
  return tasks.filter(
    (task) => !task.completed && task.dueDate && task.dueDate < today,
  );
}
export function getPendingTasks(tasks) {
  return tasks.filter((task) => !task.completed);
}
