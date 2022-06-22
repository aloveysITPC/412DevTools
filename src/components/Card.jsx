import React from "react";
// put styling in component

// import component Avatar
import Avatar from "./Avatar";

// properties passed from app.jsx
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>

          {/* extracted new component called Avatar */}
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
