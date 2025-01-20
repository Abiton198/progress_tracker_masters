import PropTypes from "prop-types";
/**
 * ToggleTodoListButton Component
 * Renders a button to toggle the visibility of the to-do list.
 *
 * Props:
 * - showTodoList (boolean): Current visibility state of the to-do list.
 * - setShowTodoList (Function): Function to toggle the visibility state.
 */
const ToggleTodoListButton = ({ showTodoList, setShowTodoList }) => {
  return (
    <button
      onClick={() => setShowTodoList(!showTodoList)} // Toggle the visibility state.
      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
    >
      {showTodoList ? 'Hide CheckList' : 'Show CheckList'}
    </button>
  );
};

// Define prop types for the component
ToggleTodoListButton.propTypes = {
  showTodoList: PropTypes.bool.isRequired, // Must be a boolean and is required.
  setShowTodoList: PropTypes.func.isRequired, // Must be a function and is required.
};

export default ToggleTodoListButton;
