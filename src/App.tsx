//import UserCard from './UserCard'
import { useState } from "react";

function App() {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (): void =>{
    if(text.trim() === ''){
      return;
    }

    setTodos([... todos, text]);
    setText('');
  };
  
  return (
    <div>
      <h1>ToDo List</h1>

      <input
      type="text"
      value={text}
      onChange={(event)=>setText(event.target.value)}
      />

      <button onClick={addTodo}>Добавить</button>

      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App