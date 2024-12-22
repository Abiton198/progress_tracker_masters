
/**
 * Adds a new task to the task list.
 * @param {Array} tasks - The current list of tasks.
 * @param {string} taskText - The text of the new task.
 * @returns {Array} - A new array with the added task.
 */
export const addTask = (tasks, taskText) => {
  // Create a new task object with a unique ID, default completion status, and no completion date.
  const newTask = {
    id: Date.now(), // Generate a unique ID using the current timestamp.
    text: taskText, // The task description provided by the user.
    completed: false, // New tasks are incomplete by default.
    dateCompleted: null, // No completion date for new tasks.
  };

  // Return the updated array of tasks with the new task appended.
  return [...tasks, newTask];
};
