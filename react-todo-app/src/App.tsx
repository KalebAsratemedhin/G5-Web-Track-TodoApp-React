import { useState } from 'react'
import './App.css'
import { Todo } from './models/Todo'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState(Array<Todo>) 
  const [index, setIndex] = useState(0)
  

  const handleAdd = (task: string) => {
    const newTodo = {id: index, title: task, isCompleted: false}
    setIndex(index + 1)
    setTodos([...todos, newTodo])
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const handleUpdate = (id: number, update: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: update } : todo
      ));
  }

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.isCompleted } : todo
      ));
  }

  return (
    
    <div className='todo-card'>
      <h1>Todos</h1>
      <TodoInput onAddTodo={handleAdd} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} onToggleComplete={handleComplete}   />
    </div>
  )
}

export default App
