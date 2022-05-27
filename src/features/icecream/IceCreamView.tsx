import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';

export function IceCreamView() {
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Ice cream: {numOfIcecream} </h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock ice cream</button>
    </div>
  );
}
