import React, { useState } from 'react';
import './style.css';
import Filter from '../Filter';
import Popup from 'reactjs-popup';
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
      <AddTable isView={ isTableViewed} setIsView = {setIsTableViewed} setTaskList = {props.setTaskList} />
      <Filter />
    </div>  
  )
}

export default FunctionBt
