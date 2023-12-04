import React from "react";
import ExerciciProduto from "./ExerciciProduto";

const myStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const Exercicios = () => {
  const [produtoPath, setProdutoPath] = React.useState(null);

  React.useEffect(() => {
    console.log("primeiro");
    const prefer = localStorage.getItem("favorite");
    if (prefer !== null) {
      setProdutoPath(prefer);
    }
  }, []);

  React.useEffect(() => {
    console.log("segundo");

    if (produtoPath !== null) {
      localStorage.setItem("favorite", produtoPath);
    }
  }, [produtoPath]);

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
