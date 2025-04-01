import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/counter/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  reset,
} from '../stores/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(20))}>
          Increment By Amount
        </button>
        <button onClick={async () => dispatch(incrementAsync(20))}>
          Increment Async
        </button>
      </div>
    </div>
  );
}
