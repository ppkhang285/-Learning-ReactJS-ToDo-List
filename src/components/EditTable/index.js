import React, { useRef } from 'react'
import './style.css'

function EditTable(props) {

  const title = useRef(null);
  let status = 1;
  //
  const closeTable = () => {
    props.setIsView(0);
  }

  
  const handleEditTask = () => {
    if (title.current.value === "") {
      alert("Please enter a title");
    }
    else {
      const today = new Date();
      const time = today.getHours() + ':' + today.getMinutes();
      const todate = today.getDate() + '/' + (today.getMonth() + 1 ) + '/' + today.getFullYear();
      const date_time = time + ', ' + todate;
      console.log(props.task)
      props.editTask( props.index, { content: title.current.value, status: status, time: date_time });  
      closeTable();
    }
    
  }
  return (props.isView) ? (
    <div className='backGround'>
      <div className='editTable'>
        <p className='edittodo'>Edit TODO</p>
        <p className='title'>Title</p>
        <input type='text' className='titleInput' ref={title} defaultValue= {props.task.content} />
        <p className='status'>Status</p>
        <select className='statusInput'
          value={props.task.status}
          onChange={(e) => { status = (parseInt(e.target.value)) }}
        >
          <option value={1}>Incomplete</option>
          <option value={2}>Complete</option>
        </select>
        <div className='btWrapper'>
          <button className='confirm' onClick={handleEditTask} >Confirm</button>
          <button className='cancel' onClick={closeTable}>Cancel</button>
        </div>
      </div>
    </div>

  ): "";
}

export default EditTable
