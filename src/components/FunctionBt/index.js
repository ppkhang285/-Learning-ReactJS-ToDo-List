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
      <AddTable isView={isTableViewed}
        setIsView={setIsTableViewed}
        taskList={props.taskList}
        setTaskList={props.setTaskList} 
      />
      <select className='filter' onChange={(e)=>props.setViewStatus(parseInt(e.target.value))}>
        <option value={3}>All</option>
        <option value={1}>Incomplete</option>
        <option value={2}>Complete</option>
      </select>
    </div>  
  )
}

export default FunctionBt
