import React from "react";

const Helmet = (props) => {
  document.title = props.title + " - TECHRUN  ";
  return <div> {props.children} </div>;
};

export default Helmet;
