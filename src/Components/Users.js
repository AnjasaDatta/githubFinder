import React, { useContext } from 'react';
import UserItem from './UserItem';
import { GlobalContext } from '../Context/GlobalState';
import Spinner from './Spinner';

const Users = () => {
  const { users, loading } = useContext(GlobalContext);
  var userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };
  return !loading ? (
    <div style={userStyle}>
      {users.map((user, id) => {
        return <UserItem key={id} user={user} />;
      })}
    </div>
  ) : (
    <Spinner />
  );
};
export default Users;
