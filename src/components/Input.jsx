import React from "react";

function Input({ label, id, myStyle, ...myProps }) {
  return (
    <div style={myStyle}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...myProps} />
    </div>
  );
}

export default Input;
