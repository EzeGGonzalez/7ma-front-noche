import React from 'react';
import UserItem from './UserItem';

const UsersList = props => {
  return (
    <ul>
      { props.users.map(u => <UserItem data={u} />) }
    </ul>
  );
}

export default UsersList;