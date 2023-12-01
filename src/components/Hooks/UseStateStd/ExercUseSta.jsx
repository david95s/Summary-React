import React from "react";
import Loading from "./Loading";

const myStyles = {
  display: "flex",
  padding: "15px",
  justifyContent: "space-between",
  width: "680px",
  borderRadius: "4px",
};
const myStyles2 = {
  ...myStyles,
  background: "#3e3e3e",
  position: "relative",
  height: "400px",
  marginBottom: "20px",
};

const ExercUseSta = ({ children }) => {
  const objtPath = {
    smart: "https://ranekapi.origamid.dev/json/api/produto/smartphone",
    tablet: "https://ranekapi.origamid.dev/json/api/produto/tablet",
    notebook: "https://ranekapi.origamid.dev/json/api/produto/notebook",
  };
  const araayObjt = Object.entries(objtPath);

  const [loading, setLoading] = React.useState(false);
  const [dados, setDados] = React.useState({});

  async function theAsync(url) {
    let json;
    try {
      setLoading(true);
      setDados({});
      const dados = await fetch(url);
      json = await dados.json();
      setDados(json);
      setLoading(false);
      return json;
    } catch (err) {
      setLoading(false);
    }
  }

  async function handleFetch({ target }) {
    const { id } = target;
    theAsync(objtPath[id]);
  }

  return (
    <div>
      <p style={{ color: "gold", fontSize: "24px" }}>{children}</p>

      <div style={myStyles2}>
        {loading && <Loading />}
        {Object.keys(dados).length > 0 && (
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "gold",
                  }}
                >
                  {dados.nome}
                </span>
              </p>
              <div>
                <img
                  style={{ height: "300px", borderRadius: "6px" }}
                  src={dados.fotos[0].src}
                  alt=""
                />
              </div>
            </div>

            <div style={{ marginLeft: "25px", marginTop: "35px" }}>
              <p>
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Descrição:{" "}
                </span>
                <span style={{ fontSize: "15px" }}>{dados.descricao}</span>
              </p>
              <p>
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Preço:{" "}
                </span>
                <span style={{ fontSize: "15px" }}>R${dados.preco}</span>
              </p>
              <p>
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Email:{" "}
                </span>
                <span style={{ fontSize: "15px" }}>{dados.usuario_id}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <div style={myStyles}>
        {araayObjt.map(([nome, path], index) => {
          return (
            <button key={nome + index} id={nome} onClick={handleFetch}>
              {nome}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ExercUseSta;
