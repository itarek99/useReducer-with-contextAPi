import { createContext, useState } from 'react';
import './App.css';
import One from './components/One';
import Two from './components/Two';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const counterInfo = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={counterInfo}>
      <div className='App'>
        <One />
        <Two />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
