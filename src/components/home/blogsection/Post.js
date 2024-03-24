import React from "react";

function Post(props) {
  return (
    <div className="col" style={{color:"var(--primary-color)"}}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href={props.url} className="btn btn-primary"style={{backgroundColor: 'var(--secondary-color)'}}>Read more</a>
        <small className="text-muted">{props.date}</small>
      </div>
    </div>
  </div>
  );
}

export default Post;