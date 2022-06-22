import React from "react";

// add props to function as a parameter and then the src is the props.imgURL passed from
function Avatar(props) {
  return <img className="circle-img" src={props.imgURL} alt="avatar_img" />;
}

export default Avatar;
