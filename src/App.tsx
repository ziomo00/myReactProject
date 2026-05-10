//import UserCard from './UserCard'
import { useState } from "react";
import MyButton from "./components/MyButton";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  
  const increment = ()=>{
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };
  
  const reset = () => {
    setCount(0);
  };

  const AddTodos = () =>{
    if(text.trim() === ''){
      return
    }

    setTodos([... todos,text]);
    setText('');
  }

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <MyButton title="+" onClick={increment} />
      <MyButton title="-" onClick={decrement} />
      <MyButton title="Сбросить" onClick={reset} />

      <h2>ToDo Лист</h2>

        <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        />

        <MyButton title="Добавить" onClick={AddTodos} />

      <ul>
        {todos.map((todo,index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App