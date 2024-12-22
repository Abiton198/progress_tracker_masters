
/**
 * TodoList Component
 * Displays a list of tasks with options to mark them as complete or incomplete.
 *
 * Props:
 * - tasks (Array): List of task objects, each containing `id`, `text`, `completed`, and `dateCompleted`.
 * - toggleTaskCompletion (Function): Callback to toggle the completion status of a task.
 */
const TodoList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="w-full max-w-md mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => toggleTaskCompletion(task.id)}
          className={`p-4 mb-2 rounded-lg shadow-md flex items-center justify-between 
            cursor-pointer ${task.completed ? 'bg-green-200' : 'bg-white'}`}
        >
          {/* Task text with optional line-through for completed tasks */}
          <span
            className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            {task.text}
          </span>

          {/* Display the date of completion if the task is completed */}
          {task.completed && (
            <span className="text-sm text-gray-400 italic">
              {task.dateCompleted ? `Completed: ${task.dateCompleted}` : ''}
            </span>
          )}

          {/* Checkbox for task completion */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="h-5 w-5 cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent click handler
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
