import React from 'react'
import './style.css'
import Task from '../Task'
import NoTask from '../NoTask'

function TaskList(props) {

  return (
    <div className='taskList'>
      {
        (props.list.length === 0)?<NoTask/>:props.list.map((item, index) => {
             return <Task task={item} id={index} />
           })
      }
    </div>
   
  )
}

export default TaskList
