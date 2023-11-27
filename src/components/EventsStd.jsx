import React from "react";

const EventsStd = () => {
  const [text, setText] = React.useState("");
  const handle = (event) => {
    const textoo = event.target.getAttribute("text");
    setText(textoo);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handle} text="Este botão pode ser acionado">
        click
      </button>
    </div>
  );
};

export default EventsStd;
