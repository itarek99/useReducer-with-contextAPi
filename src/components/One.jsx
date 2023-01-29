import { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const One = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
    </div>
  );
};
export default One;
