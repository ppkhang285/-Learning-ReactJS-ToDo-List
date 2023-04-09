import './App.css';
import FunctionBt from './components/FunctionBt';
import TaskLists from './components/TaskList';
import { useState } from 'react';

function App() {
  //const [taskList, setTaskList] = useState([{content: "Run deadline", time:"7:52 PM, 03/30/2023" }]);
  const [taskList, setTaskList] = useState([]);
  const [viewStatus, setViewStatus] = useState(3);

  const test = () => {
    console.log(viewStatus);
  }
  
  return (
    <div className="App">
      <p className='Title'>TODO LIST</p>
      <FunctionBt taskList={taskList} setTaskList={setTaskList} setViewStatus={ setViewStatus} />
      <TaskLists taskList={taskList} setTaskList={setTaskList} viewStatus={viewStatus} />
    </div>
  );
}

export default App;
