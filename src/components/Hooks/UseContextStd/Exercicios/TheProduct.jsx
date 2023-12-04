import React from "react";
import { Global } from "./GlobalContext";

const exerciciosStyle = {
  background: "#35343b",
  padding: "18px 55px",
  marginTop: "80px",
  borderRadius: "2px",
  height: "400px",
  overflowY: "scroll",
  border: "5px solid rgb(56 55 65)",
};

const styleEach = {
  background: "#383741",
  marginBottom: "20px",
  padding: "8px 45px",
  paddingBottom: "15px",
  boxSizing: "border-box",
  borderRadius: "4px",
};

const TheProduct = () => {
  const { data, clearData } = React.useContext(Global);
  if (data.length === 0) return;
  return (
    <div style={exerciciosStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Exercicios Produtos</h2>
        <button
          style={{
            padding: "1px 15px",
            height: "40px",
            background: "pink",
            color: "black",
          }}
          onClick={clearData}
        >
          X
        </button>
      </div>
      <br />
      {data.map((produto) => {
        return (
          <div key={produto.id} style={styleEach}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: "15px", color: "gold", marginBottom: "0" }}>
                {produto.nome}
              </p>
              <p style={{ fontSize: "15px", color: "gold", marginBottom: "0" }}>
                R${produto.preco}
              </p>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
              }}
            >
              <img
                src={produto.fotos[0]["src"]}
                style={{ height: "180px", borderRadius: "8px" }}
              />
              <p style={{ fontSize: "15px", marginLeft: "18px" }}>
                {produto.descricao}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TheProduct;
