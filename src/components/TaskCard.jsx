import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskCard({task}) {

/*  const value= useContext(TaskContext)
 console.log(value) */

 const {deleteTask} = useContext(TaskContext)
  return (
 
    <div className='bg-gray-800 text-white p-4 rounded-md'>
    <h1 className='text-x1 font-bold capitalize'>{task.title}</h1>
    <p className='text-gray-500 text-sm'>{task.description}</p>
    <button className='bg-blue-600 rounded-md px-1 py-1 mt-4 hover:bg-blue-400' onClick={()=>{
      deleteTask(task.id)
    }}>
      Eliminar tarea
      </button>
    </div>
  
  )
}

export default TaskCard