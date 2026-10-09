import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function addTask() {
    if (text !== '') {
      setTasks([...tasks, text]);
    }
  }

  function removeTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;