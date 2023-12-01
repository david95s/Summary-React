import React from "react";

const Exercicios = () => {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "500px",
  };
  return (
    <section>
      <div style={myStyle}>
        <button>notebook</button>
        <button>smartphone</button>
      </div>
    </section>
  );
};

export default Exercicios;
