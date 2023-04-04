import './style.css'
import TickBox from '../TickBox'
import EditBt from '../EditBt'
import DeleteBt from '../DeleteBt'


function Task(props) {
  return (
    <div className='taskBounder'>
      <TickBox />
      
      <div className='taskText'>
        <p className='taskContent' >{props.task.content}</p>
        <p className='taskCreateTime' >{props.task.time}</p>
      </div>
      <DeleteBt index={props.id} />
      <EditBt />
    </div>
  )
}

export default Task
