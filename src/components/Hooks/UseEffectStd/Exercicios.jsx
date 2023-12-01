import React from "react";
import ExerciciProduto from "./ExerciciProduto";

const myStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const dataStyle = {
  background: "#383640",
  padding: "8px",
  marginTop: "15px",
  borderRadius: "4px",
};

const Exercicios = () => {
  const [produtoPath, setProdutoPath] = React.useState(null);

  React.useEffect(() => {
    if (produtoPath !== null) {
      localStorage.setItem("favorite", produtoPath);
    }
  }, [produtoPath]);

  React.useEffect(() => {
    const prefer = localStorage.getItem("favorite");

    if (prefer !== null) {
      setProdutoPath(prefer);
    }
  }, []);

  function handleClick({ target }) {
    setProdutoPath(target.innerText);
  }

  return (
    <section>
      <div style={myStyle}>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
      </div>

      {produtoPath && <ExerciciProduto produPath={produtoPath} />}
    </section>
  );
};

export default Exercicios;
