import { useState } from "react";
import { ProgressBar, TodoList, ToggleTodoListButton } from "./components";
import { calculateProgress, toggleTaskCompletion } from "./utils";

/**
 * App Component
 * The main component managing the state of tasks, user interactions, and rendering child components.
 */
function App() {
  // State to manage the list of tasks.
  const [tasks, setTasks] = useState([
    { id: 1, text: "Machine Learning Specialization - (Stanford)", completed: true, dateCompleted: "May 2023" },
    { id: 2, text: "NLP Specialization - (Stanford)", completed: true, dateCompleted: "Jan 2024" },
    { id: 3, text: "DL & NN Specialization - (Stanford)", completed: true, dateCompleted: "Aug 2024" },
    { id: 4, text: "Python - Data Structures (Michigan)", completed: true, dateCompleted: "Sep 2024" },
    { id: 5, text: "Programming for Everyone (Michigan)", completed: true, dateCompleted: "Oct 2024" },
    { id: 6, text: "Linear Algebra - ML (Imperial College)", completed: false, dateCompleted: null },
    { id: 7, text: "Intro to Probability (Un. of Zurich)", completed: false, dateCompleted: null },
    { id: 8, text: "TensorFlow Specialization (DeepLearning.AI)", completed: false, dateCompleted: null },
    { id: 9, text: "IELTS (British Embassy)", completed: false, dateCompleted: null },
    { id: 10, text: "Statement of Purpose (Personal)", completed: false, dateCompleted: null },
    { id: 11, text: "Graduate Record Examination (IOU)", completed: false, dateCompleted: null },
    { id: 12, text: "References (Personal)", completed: false, dateCompleted: null },
    { id: 13, text: "Completed Degree (IOU)", completed: false, dateCompleted: null },
    { id: 14, text: "Entry Exam (MBZAIU)", completed: false, dateCompleted: null },
    { id: 15, text: "Admission Interview (MBZAIU)", completed: false, dateCompleted: null },
    { id: 16, text: "Admission (MBZAIU)", completed: false, dateCompleted: null },
  ]);

  // State to control the visibility of the to-do list.
  const [showTodoList, setShowTodoList] = useState(false);

  /**
   * Handles toggling the completion status of a task.
   * @param {number} id - The ID of the task to toggle.
   */
  const handleToggleTaskCompletion = (id) => {
    setTasks(toggleTaskCompletion(tasks, id));
  };

  // Calculate the progress percentage for the progress bar.
  const progressPercentage = calculateProgress(tasks);

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center py-10">
      {/* Application title */}
      <h1 className="text-3xl font-bold mb-6 text-white">NLP Masters Road</h1>

      {/* Progress bar */}
      <ProgressBar progress={progressPercentage} />

      {/* Button to toggle the visibility of the to-do list */}
      <ToggleTodoListButton
        showTodoList={showTodoList}
        setShowTodoList={setShowTodoList}
      />

      {/* Conditionally render the to-do list */}
      {showTodoList && (
        <TodoList tasks={tasks} toggleTaskCompletion={handleToggleTaskCompletion} />
      )}
    </div>
  );
}

export default App;
