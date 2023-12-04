import React from "react";

const UseRefStd = () => {
  const inputElement = React.useRef();
  const eltest = React.useRef();
  const [valor, setVAlor] = React.useState("");
  // ----
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();
  // ----

  React.useEffect(() => {
    eltest.current = 0;
  }, []);
  function handleChange({ target }) {
    setVAlor(target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    inputElement.current.focus();
    eltest.current++;
  }
  // ----

  function handleNotificacao() {
    setNotificacao("Obrigado por comprar");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao("");
    }, 1500);
    setContar(contar + 1);
  }

  return (
    <div>
      <h2>Estudo de UseRef</h2>
      <br />

      {/* <form action="">
        <input
          ref={inputElement}
          type="email"
          id="email"
          value={valor}
          onChange={handleChange}
        />
        <br />
        <input type="text" id="username" />
        <br />
        <button onClick={handleClick}>enviar</button>
      </form> */}

      <p>{notificacao}</p>
      <button onClick={handleNotificacao}>{contar}</button>
    </div>
  );
};

export default UseRefStd;
