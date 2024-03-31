import logo from './logo.svg';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='home'></div>
      <div className='main'>
        <div>
          <span className='text-span'>QuadBtech TO-DO-List</span>
        </div>
        <div>
          <TaskInput />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
