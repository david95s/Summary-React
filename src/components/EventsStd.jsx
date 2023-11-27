import React from "react";

const EventsStd = () => {
  const [text, setText] = React.useState("");

  const handle = (event) => {
    const textoo = event.target.getAttribute("text");
    setText(textoo);
  };

  // Add eventos em Elementos como Body e Html.Aí temos que usar com JS puro.
  let num = 0;
  function handleScroll() {
    num = num + 1;
    console.log(num);
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <div style={{ height: "950px" }}>
      <p>{text}</p>
      <button onClick={handle} text="Este botão pode ser acionado">
        click
      </button>
    </div>
  );
};

export default EventsStd;
