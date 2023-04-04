import React from 'react'
import './style.css'

function DeleteBt(props) {

  const handleDelete = () => {
    props.deleteTask(props.id);
  }
  
  return (
    <button className='deleteBt' onClick={handleDelete}>
      
    </button>
  )
}

export default DeleteBt
