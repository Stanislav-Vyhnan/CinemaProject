import React from 'react';
import { useSelector } from 'react-redux';
import './Carousel.scss';

export default function Carousel() {
  // const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  // const plus = () => dispatch(actions.increment()); onClick={plus}
  // const minus = () => dispatch(actions.decrement()); onClick={minus}

  return (
    <>
      <button type="button">Plus</button>
      <p>
        <b>{count}</b>
      </p>
      <button type="button">Minus</button>
    </>
  );
}
