import React from 'react'
import './style.css'
import Task from '../Task'
import NoTask from '../NoTask'

function TaskList(props) {

  const handleDelete = (index) => {
    let tempList = [...props.taskList];
    tempList.splice(index, 1);
    props.setTaskList(tempList);
  }

  const handelEditTask = (index, info) => {
    let tempList = [...props.taskList];
    tempList[index] = info;
    console.log(index)
    props.setTaskList(tempList);
  }
  

  const listLength = () => {
    let length = 0; 
    props.taskList.map((item) => {
      if (item.status & props.viewStatus) length += 1;
    });
    return length;
  }
  



  return (
    <div className='taskList'>
      {
        (listLength() === 0)?<NoTask/>:props.taskList.map((item, index) => {
          return (item.status & props.viewStatus) ?
            <Task task={item}
              key={index}
              index={index}
              deleteTask={handleDelete}
              editTask={handelEditTask} /> : ""
           })
      }
    </div>
   
  )
}

export default TaskList
