import './App.css';
import FunctionBt from './components/FunctionBt';
import TaskLists from './components/TaskList';
import { useState } from 'react';

function App() {
  //const [taskList, setTaskList] = useState([{content: "Run deadline", time:"7:52 PM, 03/30/2023" }]);
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <p className='Title'>TODO LIST</p>
      <FunctionBt setTaskList={setTaskList} />
      <TaskLists list={taskList} />
    </div>
  );
}

export default App;
