
import './App.css'
import { ProgressBar, ToDoList, ToggleToDoListButton } from './components'
import { AddTask } from './utils'

function App() {

  return (
    <>
      <h1 className='text-white text-3xl mt-10'>Masters NLP</h1>
      <p className="read-the-docs">
        Click here to check progress...
      </p>
      <ToDoList/>
      <ProgressBar/>
      <AddTask/>
      <ToggleToDoListButton/>
    </>
  )
}

export default App
