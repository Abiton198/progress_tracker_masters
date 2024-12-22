
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
      {showTodoList ? 'Hide To-Do List' : 'Show To-Do List'}
    </button>
  );
};

export default ToggleTodoListButton;
