import PropTypes from 'prop-types';
/**
 * AddTaskInput Component
 * Renders an input field and button for adding new tasks.
 *
 * Props:
 * - newTaskText (string): The current value of the task input field.
 * - setNewTaskText (Function): Function to update the input field state.
 * - handleAddTask (Function): Function to add a new task when the button is clicked.
 */
const AddTaskInput = ({ newTaskText, setNewTaskText, handleAddTask }) => {
  return (
    <div className="flex mb-6">
      {/* Input field for entering a new task */}
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
        className="border rounded-l-lg p-2 w-64 focus:outline-none"
      />

      {/* Button to add the task */}
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

// Define prop types for the component
AddTaskInput.propTypes = {
  newTaskText: PropTypes.string.isRequired, // Must be a string and is required
  setNewTaskText: PropTypes.func.isRequired, // Must be a function and is required
  handleAddTask: PropTypes.func.isRequired, // Must be a function and is required
};

export default AddTaskInput;
