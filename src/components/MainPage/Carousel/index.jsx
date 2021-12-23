import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import './index.scss';

export default function Carousel() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const plus = () => dispatch(actions.increment());
  const minus = () => dispatch(actions.decrement());

  return (
    <main>
      <button type="button" onClick={plus}>
        Plus
      </button>
      <p>
        <b>{count}</b>
      </p>
      <button type="button" onClick={minus}>
        Minus
      </button>
    </main>
  );
}
