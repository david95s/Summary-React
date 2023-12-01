import React from "react";

const Modal = ({ setMyModal, myModal }) => {
  return (
    <div
      style={{
        background: "white",
        width: "380px",
        height: "400px",
        margin: "0 auto",
        color: "black",
        textAlign: "center",
        position: "absolute",
        top: "80px",
        left: "50%",
        marginLeft: "-230px",
      }}
    >
      <p>dados</p>
      <button
        onClick={() => {
          setMyModal(!myModal);
        }}
        style={{ marginTop: "270px" }}
      >
        X
      </button>
    </div>
  );
};

export default Modal;
