import { Todo } from "../models/Todo"
import TodoItem from "./TodoItem"

interface Props{
    todos: Array<Todo>,
    onDelete: (id: number) => void,
    onUpdate: (id: number, update: string) => void,
    onToggleComplete: (id: number) => void
}

const TodoList = ({todos, onDelete, onUpdate, onToggleComplete}: Props) => {
  return (
    <div className='todo-list'>
        {
          todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} onToggleComplete={onToggleComplete}/>
          })
        }
        
    </div>
  )
}

export default TodoList