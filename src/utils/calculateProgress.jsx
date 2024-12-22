
/**
 * Calculates the progress percentage based on completed tasks.
 * @param {Array} tasks - An array of task objects. Each object should have a `completed` boolean property.
 * @returns {number} - The progress percentage (0 to 100).
 */

const calculateProgress = (tasks) => {
  // Count the number of tasks that are completed.
  const completedTasks = tasks.filter((task) => task.completed).length;

  // If there are no tasks, return 0% progress to avoid division by zero.
  if (tasks.length === 0) return 0;

  // Calculate progress as the percentage of completed tasks.
  return (completedTasks / tasks.length) * 100;

};

export default calculateProgress; 