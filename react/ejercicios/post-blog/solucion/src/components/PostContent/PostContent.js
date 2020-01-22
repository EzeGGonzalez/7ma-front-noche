import React from 'react';

const PostContent = (props) => {
  return (
    <section className="post-content">
      <img
        className="post-img"
        src={props.img.src}
        alt={props.img.altText}
      />
      <div className="post-text-container">
        <h1 className="post-title">{props.title}</h1>
        <p className="post-text">
          {props.content}
        </p>
        <a href="/" className="read-more">
          Ver más
        </a>
      </div>
    </section>
  )
}

export default PostContent;