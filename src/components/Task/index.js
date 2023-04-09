import './style.css'
import TickBox from '../TickBox'
import EditTable from '../EditTable'
import { ReactComponent as Bin } from '../../img/rubbish-bin.svg'
import { ReactComponent as EditButton } from '../../img/edit-button.svg'
import { useState } from 'react'


function Task(props) {
  const [isViewEditTb, setIsViewEditTb] = useState(0);
  const handleDelete = () => {
    props.deleteTask(props.index);
  }

  const openEditTb = () => {
    setIsViewEditTb(1);
  }
  
  return (
    <div className='taskBounder'>
      <EditTable isView={isViewEditTb}
        setIsView={setIsViewEditTb}
        task={props.task}
        editTask={props.editTask}
        index = {props.index}
      />
      <TickBox />
      <div className='taskText'>
        <p className='taskContent' >{props.task.content}</p>
        <p className='taskCreateTime' >{props.task.time}</p>
      </div>
      <button className='deleteBt' onClick={handleDelete}>
        <Bin className='deletePic'/>
      </button>
      <button className='editBt' onClick={openEditTb} >
        <EditButton className='editPic'/>
      </button>
    </div>
  )
}

export default Task
