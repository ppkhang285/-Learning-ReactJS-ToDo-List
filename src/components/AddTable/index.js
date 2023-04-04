import React from 'react'
import './style.css'

function AddTable(props) {
  
  const closeTable = () => {
    props.setIsView(0);
  }

  return (props.isView) ? (
    <div className='backGround'>

      
      <div className='addTable'>
        <p className='addtodo'>Add TODO</p>
        <p className='title'>Title</p>
        <input className='titleInput' />
        <p className='status'>Status</p>
        <select className='statusInput' onc >
          <option value={0}>Incomplete</option>
          <option value={1}>Complete</option>
        </select>
        <div className='btWrapper'>
          <button className='addTask'>Add Task</button>
          <button className='cancel' onClick={closeTable}>Cancel</button>
        </div>
      </div>
    </div>

  ): "";
}

export default AddTable
