import React from 'react';

const UserItem = props => {
  return (
    <li>
      <span>{props.data.nombre}</span> <span>{props.data.edad}</span>
    </li>
  )
}

export default UserItem;