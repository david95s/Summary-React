import React from "react";
import ModalEffect from "./ModalEffect";

const UseEffectStd = ({ show }) => {
  const [ativo, setAtivo] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  console.log("");
  console.log("");

  console.log("Ever");

  React.useEffect(() => {
    console.log("Ocorre ao renderizar e ao atualizar");
  });

  React.useEffect(() => {
    //Com um array vazío só ativa uma vez. Tempo idel p puxar dados api
    console.log("%c SOMENTE uma vz", "color: gold; font-weight:bold");
  }, []);

  React.useEffect(() => {
    console.log(
      "%c Estado de Ativo foi alterado",
      "color: #19f; font-weight:bold",
    );
  }, [ativo]);

  React.useEffect(() => {
    console.log(
      "%c Estado de Modal foi alterado",
      "color: #16e76b; font-weight:bold",
    );
  }, [modal]);

  if (show) {
    return (
      <div>
        {ativo && <h2>Estou ativo</h2>}
        <button
          onClick={() => {
            setAtivo(!ativo);
          }}
        >
          Ative
        </button>
        <br />
        <br />

        <div>{modal && <ModalEffect setModal={setModal} />}</div>
        <br />

        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          Modal
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default UseEffectStd;
