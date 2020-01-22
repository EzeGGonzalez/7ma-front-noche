import React from 'react';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostContent from '../PostContent/PostContent';
import Comments from '../Comments/Comments';

const Post = (props) => {
  // props.comments
  return (
    <div className="column">
      <section className="post">
        <PostAuthor user={props.user} date={props.date} />
        <PostContent img={props.img} title={props.title} content={props.content} />
        <Comments comments={props.comments} />
      </section>
    </div>
  )
}

export default Post;