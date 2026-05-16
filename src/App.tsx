//import UserCard from './UserCard'
import { useState } from "react";
import MyButton from "./components/MyButton";

type Task = {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const back = () =>{
    setCount(0);
  };

  const newTask = () => {
  if (!text.trim()) {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

    setTasks([...tasks, newTask]);
    setText('');
  };

  return (
    <div>
      <h1>Счётчик {count}</h1>
      <MyButton title="+" onClick={increment}/>
      <MyButton title="-" onClick={decrement}/>
      <MyButton title="Вернуть" onClick={back}/>

      <h1>todoList</h1>
        <input 
        value={text}
        onChange={event => setText(event.target.value)}
        />
        <MyButton title="Добавить задачу" onClick={newTask}/>
        <ul>
          {tasks.map((task) => 
            <li key={task.id}>{task.text}</li>
          )}
        </ul>
    </div>
  )
}

export default App