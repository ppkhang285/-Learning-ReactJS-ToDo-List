import React, { useState } from 'react';
import './style.css';
import AddTable from '../AddTable';

function FunctionBt(props) {
  const [isTableViewed, setIsTableViewed] = useState(0);

  //Mo table
  function viewTable(){
    setIsTableViewed(1);
  }
  
  return (
    <div className='functionBt'>
      <button className='addTask' onClick={viewTable}>Add Task</button>
      <AddTable isView={isTableViewed} setIsView={setIsTableViewed} taskList={ props.taskList} setTaskList = {props.setTaskList} />
      <select className='filter'>
        <option value={2}>All</option>
        <option value={0}>Incomplete</option>
        <option value={1}>Complete</option>
      </select>
    </div>  
  )
}

export default FunctionBt
