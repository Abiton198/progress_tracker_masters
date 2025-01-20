import PropTypes from "prop-types";
import { useState } from "react";
import {ModalBox} from "../utils";
import summaries from "../utils/summaries"; // Import the summaries

/**
 * TodoList Component
 * Displays a list of tasks with hoverable popups and detailed program summaries on click.
 */
const TodoList = ({ tasks, toggleTaskCompletion }) => {
  const [hoveredTaskId, setHoveredTaskId] = useState(null); // Track hovered task
  const [selectedTask, setSelectedTask] = useState(null); // Track selected task for modal

  const handlePopupClick = (task) => {
    setSelectedTask(task); // Set the selected task to display in the modal
  };

  const closeModal = () => {
    setSelectedTask(null); // Clear the selected task to close the modal
  };

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
            onMouseEnter={() => setHoveredTaskId(task.id)}
            onMouseLeave={() => setHoveredTaskId(null)}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => !task.completed && toggleTaskCompletion(task.id)}
                disabled={task.completed}
              />
              {task.text}
            </label>

            {/* Popup */}
            {hoveredTaskId === task.id && (
              <div
                className="popup-summary"
                onClick={() => handlePopupClick(task)}
              >
                Click for details
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Modal for program details */}
      <ModalBox
        isVisible={!!selectedTask}
        title={selectedTask ? `Details for: ${selectedTask.text}` : ""}
        content={
          selectedTask && (
            <div>
              <p>
                {selectedTask.completed
                  ? `This program was completed on: ${selectedTask.dateCompleted || "N/A"}`
                  : "This program is still in progress or yet to start."}
              </p>
              <p>
                <strong>Program Overview:</strong>
              </p>
              <p>{summaries[selectedTask.id]}</p>
            </div>
          )
        }
        onClose={closeModal}
      />
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
