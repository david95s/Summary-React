import React from "react";

const dataStyle = {
  background: "#383640",
  padding: "8px",
  marginTop: "15px",
  borderRadius: "4px",
};

const ExerciciProduto = ({ produPath }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    if (produPath !== null) {
      handleFetch(produPath);
    }
  }, [produPath]);

  async function handleFetch(path) {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${path}`;
    if (path) {
      try {
        setData({});
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
      } catch (err) {
        console.log("Errou");
      }
    }
  }

  if (Object.keys(data).length === 0) return;
  return (
    <div>
      <div style={dataStyle}>
        <div>
          <h2>
            <span style={{ color: "white" }}>Preferência:</span> {data.nome}
          </h2>
          <p>Nome: {data.nome}</p>
          <p>Descriçãao: {data.descricao}</p>
          <p>Email: {data.usuario_id}</p>
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default ExerciciProduto;
