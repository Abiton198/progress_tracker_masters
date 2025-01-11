import PropTypes from "prop-types";
import { useState } from "react";

/**
 * TodoList Component
 * Displays a list of tasks with a hoverable summary popup.
 */
const TodoList = ({ tasks, toggleTaskCompletion }) => {
  // State to manage the ID of the task being hovered or touched
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
            onMouseEnter={() => setHoveredTaskId(task.id)} // Show popup on hover
            onMouseLeave={() => setHoveredTaskId(null)} // Hide popup when cursor leaves
          >
            <label>
              {/* Checkbox is disabled if the task is completed */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => !task.completed && toggleTaskCompletion(task.id)}
                disabled={task.completed}
              />
              {task.text}
            </label>

            {/* Popup for program summary */}
            {hoveredTaskId === task.id && (
              <div
                className="popup-summary"
                onClick={() => setHoveredTaskId(null)} // Hide popup on click
              >
                {task.completed
                  ? `Completed on: ${task.dateCompleted || "N/A"}`
                  : "This program is not yet completed."}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      dateCompleted: PropTypes.string,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
};

export default TodoList;
