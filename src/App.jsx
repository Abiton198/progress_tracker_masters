// src/App.js

import { useState } from 'react';
import {ProgressBar, TodoList, AddTaskInput} from './components';
import { calculateProgress, addTask, toggleTaskCompletion } from './utils';

/**
 * App Component
 * The main component managing the state of tasks, user interactions, and rendering child components.
 */
function App() {
  // State to manage the list of tasks.
  const [tasks, setTasks] = useState([
    { id: 1, text: 'NLP Specialization', completed: true, dateCompleted: '2024-01-15' },
    { id: 2, text: 'Deep Learning Course', completed: false, dateCompleted: null },
    { id: 3, text: 'Practice Machine Learning on Kaggle', completed: false, dateCompleted: null },
  ]);

  // State to track the input value for adding new tasks.
  const [newTaskText, setNewTaskText] = useState('');

  // State to control the visibility of the to-do list.
  const [showTodoList, setShowTodoList] = useState(false);

  /**
   * Handles toggling the completion status of a task.
   * @param {number} id - The ID of the task to toggle.
   */
  const handleToggleTaskCompletion = (id) => {
    setTasks(toggleTaskCompletion(tasks, id));
  };

  /**
   * Handles adding a new task to the task list.
   */
  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      setTasks(addTask(tasks, newTaskText));
      setNewTaskText(''); // Clear the input field after adding the task.
    }
  };

  // Calculate the progress percentage for the progress bar.
  const progressPercentage = calculateProgress(tasks);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Application title */}
      <h1 className="text-3xl font-bold mb-6">NLP Masters Degree Preparation</h1>

      {/* Progress bar */}
      <ProgressBar progress={progressPercentage} />

      {/* Input for adding new tasks */}
      <AddTaskInput
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        handleAddTask={handleAddTask}
      />

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
