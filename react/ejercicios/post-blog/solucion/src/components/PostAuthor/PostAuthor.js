import React from 'react';

const PostAuthor = (props) => {
  return (
    <header className="post-info">
      <img
        className="user-avatar"
        src={props.user.avatar}
        alt={props.user.username + " Avatar"}
      />
      <div className="container">
        <h3 className="username">{props.user.username}</h3>
        <p className="post-date">
Publicado el <time>{props.date.getDate()}-{props.date.getMonth() + 1}-{props.date.getFullYear()}</time>
        </p>
      </div>
    </header>
  )
}

export default PostAuthor;