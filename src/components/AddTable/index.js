import React, { useRef, useState } from 'react'
import './style.css'

function AddTable(props) {

  const title = useRef(null);
  const [status, setStatus] = useState(0); 
  //
  const closeTable = () => {
    props.setIsView(0);
  }

  const handleAddTask = () => {
    if (title.current.value === "") {
      alert("Please enter a title");
    }
    else {
      const today = new Date();
      const time = today.getHours() + ':' + today.getMinutes();
      const todate = today.getDate() + '/' + (today.getMonth() + 1 ) + '/' + today.getFullYear();
      const date_time = time + ', ' + todate;
      props.setTaskList([...props.taskList, { content: title.current.value, status: status, time: date_time }]);  
      closeTable();
    }
    
  }
  return (props.isView) ? (
    <div className='backGround'>
      <div className='addTable'>
        <p className='addtodo'>Add TODO</p>
        <p className='title'>Title</p>
        <input type='text' className='titleInput' ref={title} />
        <p className='status'>Status</p>
        <select className='statusInput' onChange={(e) => setStatus(e.target.value)} >
          <option value={0}>Incomplete</option>
          <option value={1}>Complete</option>
        </select>
        <div className='btWrapper'>
          <button className='addTask' onClick={handleAddTask} >Add Task</button>
          <button className='cancel' onClick={closeTable}>Cancel</button>
        </div>
      </div>
    </div>

  ): "";
}

export default AddTable
