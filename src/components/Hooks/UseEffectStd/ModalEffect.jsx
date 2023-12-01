import React from "react";

const ModalEffect = ({ setModal }) => {
  const mySty = {
    width: "500px",
    background: "black",
    borderRadius: "4px",
    padding: "80px",
    height: "200vh",
  };

  function handleModal() {
    //Aq o useEffect q esta em UseEffectStd, vai ser ativado
    //Pois estou alterando o estado de Modal
    setModal((modal) => {
      return !modal;
    });
  }

  function handleDocument() {
    console.log("Scroll");
  }

  React.useEffect(() => {
    document.addEventListener("scroll", handleDocument);

    //Sempre qnd o Component ModalEffect sair, ela vai remover o evento do document
    return () => {
      document.removeEventListener("scroll", handleDocument);
    };
  }, []);

  return (
    <div style={mySty}>
      <button onClick={handleModal}>X</button>
      <h1>Modal Ativo</h1>
    </div>
  );
};

export default ModalEffect;
