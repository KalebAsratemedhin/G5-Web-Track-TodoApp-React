import { useState } from "react"
import { Todo } from "../models/Todo"
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";


interface Prop{
    todo: Todo,
    onDelete: (id: number) => void,
    onUpdate: (id: number, update: string) => void,
    onToggleComplete: (id: number) => void
}

const TodoItem = ({todo, onDelete, onUpdate, onToggleComplete}: Prop) => {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] =  useState(todo.title)
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted)

    const handleSave = () => {
      onUpdate(todo.id, title)
      setIsEditing(!isEditing)
      
    }

    const handleToggleComplete = () => {
      onToggleComplete(todo.id)
      setIsCompleted(!isCompleted)
    }

    
  return (
    <div className="todo-item">
        <div className="todo-item-text">
          <input type="checkbox" name="isCompleted" checked={isCompleted} className="todo-item-checkbox" onChange={handleToggleComplete} />
          
          {isEditing ? <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} /> : <li>{todo.title}</li> }
        </div>

        <div>
          <MdDelete className="todo-item-icon" onClick={() => onDelete(todo.id)}/>
          
          {isEditing ? <IoIosSave className="todo-item-icon" onClick={handleSave} />
           : <MdModeEdit className="todo-item-icon" onClick={() => setIsEditing(!isEditing)} />}
        </div>

        
    </div>
  )
}

export default TodoItem