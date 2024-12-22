/**
 * Toggles the completion status of a task in the task list.
 * - If marking a task as completed, prompts the user for a completion date.
 * - If marking a task as incomplete, clears the completion date.
 *
 * @param {Array} tasks - The current list of tasks.
 * @param {number} id - The ID of the task to toggle.
 * @returns {Array} - A new array of tasks with the updated completion status.
 */
export const toggleTaskCompletion = (tasks, id) => {
  // Map through the tasks to find and update the specified task.
  return tasks.map((task) => {
    if (task.id === id) {
      // If the task is incomplete, ask the user for the completion date.
      if (!task.completed) {
        const dateCompleted = prompt(
          'When was this task completed? (YYYY-MM-DD)',
          new Date().toISOString().slice(0, 10) // Suggest today's date by default.
        );
        // If the user provides a valid date, mark the task as completed.
        if (dateCompleted) {
          return { ...task, completed: true, dateCompleted };
        }
      } else {
        // If the task is already completed, mark it as incomplete and clear the date.
        return { ...task, completed: false, dateCompleted: null };
      }
    }
    return task; // Return the unchanged task for all others.
  });
};
