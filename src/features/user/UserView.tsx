import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers } from './userSlice';

export function UserView() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users: </h2>
      {user.loading && <div>Loading</div>}

      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}

      {!user.loading && user.users.length ? (
        <ol>
          {user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
}
