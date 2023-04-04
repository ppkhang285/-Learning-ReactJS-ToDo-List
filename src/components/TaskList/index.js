import React from 'react'
import './style.css'
import Task from '../Task'
import NoTask from '../NoTask'

function TaskList(props) {
  const handleDelete = () => {
    //props.taskList.slice()
  }
  
  return (
    <div className='taskList'>
      {
        (props.taskList.length === 0)?<NoTask/>:props.taskList.map((item, index) => {
          return <Task task={item} id={index} deleteTask={handleDelete} />
           })
      }
    </div>
   
  )
}

export default TaskList
