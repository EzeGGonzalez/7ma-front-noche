import React from 'react';
import PostAuthor from '../PostAuthor/PostAuthor';

class Comment extends React.Component {
  render () {
    return (
      <article className="comment">
        <PostAuthor user={this.props.user} date={this.props.date} />
        <p className="comment-content">{this.props.comment}</p>
      </article>
    )
  }
}

// const Comment = props => {
//   return (
//     <article className="comment">
//       <PostAuthor user={props.user} date={props.date} />
//       <p className="comment-content">{props.comment}</p>
//     </article>
//   )
// }

export default Comment;