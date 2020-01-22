import React from 'react';
import Comment from '../Comment/Comment';

const Comments = (props) => {
  // props.comments
  return (
    <section className="comments">
      <h2 className="comments-title">Comentarios</h2>
      <ul className="comments-list">
        {
          props.comments.map(c =>
            <li className="comment-item">
              <Comment user={c.user} date={c.date} comment={c.content} />
            </li>
          )
        }
      </ul>

    </section>
  )
}

export default Comments;