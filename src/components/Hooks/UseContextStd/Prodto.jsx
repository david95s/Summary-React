import React from "react";
import { ContextoUsuario } from "./ContextoUsuario";

const Prodto = () => {
  // const doContexto = React.useContext(ContextoUsuario);
  // console.log(doContexto)
  const [myPdt, addProduto] = React.useContext(ContextoUsuario);

  const [kd, setKd] = React.useState("");
  const input = React.useRef();

  function handleClick() {
    const realinput = input.current;
    if (realinput.value.trim().length > 0) {
      addProduto(realinput.value.trim());
    }
    realinput.focus();
    setKd("");
  }

  function handleChange({ target }) {
    setKd(target.value);
  }

  return (
    <section style={{ maxWidth: "450px" }}>
      <p style={{ color: "gold" }}>PRODUTO</p>

      {myPdt.length > 0 && <p>{myPdt.join(", ")}</p>}

      <input ref={input} type="text" value={kd} onChange={handleChange} />
      <br />
      <button onClick={handleClick}>click</button>
    </section>
  );
};

export default Prodto;
