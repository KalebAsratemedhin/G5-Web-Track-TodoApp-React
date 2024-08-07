import { useState } from "react";
import { IoIosAdd } from "react-icons/io";


interface Props{
    onAddTodo: (task: string) => void
}

const TodoInput = ({onAddTodo}: Props) => {
  const [task, setTask] = useState("")
  const handleAdd = () => {
    onAddTodo(task)
    setTask("")
  }

  return (
    <div className='todo-input'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /> 
        <IoIosAdd onClick={handleAdd} className='todo-input-icon' />
    </div>
  )
}

export default TodoInput