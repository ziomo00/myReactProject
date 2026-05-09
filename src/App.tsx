//import UserCard from './UserCard'
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operation, setOperation] = useState<string>('+');
  const [result, setResult] = useState<number | null>(null);

  const calculate =(): void =>{
    const a = Number(firstNumber);
    const b = Number(secondNumber);
  
    if(operation === '+'){
      setResult(a + b);
    }else if(operation === '-'){
      setResult(a - b);
    }else if (operation === '/'){
      setResult(a / b);
    }else if(operation === '*'){
      setResult(a * b);
    }
  }
  return (
    <div>
      <h1>Калькулятор</h1>

      <input
        type="number"
        value={firstNumber}
        onChange={(event) => setFirstNumber(event.target.value)}
      />

      <select
      value={operation}
      onChange={(event) => setOperation(event.target.value)}
      >
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='/'>/</option>
        <option value='*'>*</option>
      </select>

      <input
        type="number"
        value={secondNumber}
        onChange={(event) => setSecondNumber(event.target.value)}
      />

      <button onClick={calculate}>Посчитать</button>
      <h2>Результат:{result}</h2>
    </div>
  )
}

export default App