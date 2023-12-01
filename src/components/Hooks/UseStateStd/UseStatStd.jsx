import React from "react";
import Modal from "./Modal";

const UseStatStd = ({ children, myStyle }) => {
  //exampleOne só pra mostra o primeiro estudo
  const exampleOne = false;
  const exampleTwo = false;
  const exampleThree = true;

  const myObj = {
    nome: "David",
    idade: 28,
  };
  const [dados, setDAdos] = React.useState(myObj);
  function handleFacul() {
    setDAdos({ ...dados, faculdade: true });
  }

  //-------- exampleTwo
  const [myModal, setMyModal] = React.useState(false);

  //-------exampleThree
  const dadosJson = ["David", "Pollyane", "Samuel", "Vitória"];
  const [testArray, setTestArray] = React.useState(dadosJson);

  const isEdgar = testArray.some((i) => i === "Edgar");
  function handleTestArray() {
    //setTestArray() <= Posso passar callback dentro dela
    setTestArray((myTestArray) => {
      if (!isEdgar) {
        return [...myTestArray, "Edgar"];
      } else {
        return [...myTestArray];
      }
    });
  }
  function returnTestString() {
    return testArray.join(" ");
  }

  return (
    <section>
      <p style={myStyle}>{children}</p>
      {exampleOne && (
        <div style={{ marginBottom: "150px" }}>
          <p>Nome: {dados.nome}</p>
          <p>Idade: {dados.idade}</p>
          <p>{dados.faculdade && `${dados.nome} possui faculdade`}</p>
          <button onClick={handleFacul}>Setar Faculdade</button>
        </div>
      )}
      {exampleTwo && (
        <>
          <button onClick={() => setMyModal(!myModal)}>
            {myModal ? "Fechar Modal" : "Abrir Modal"}
          </button>
          {myModal && <Modal setMyModal={setMyModal} myModal={myModal} />}
        </>
      )}

      {exampleThree && (
        <>
          <p>{returnTestString()}</p>
          {isEdgar && (
            <p style={{ color: "pink", fontSize: "15px" }}>
              Edgar foi incluido na lista
            </p>
          )}
          <button onClick={handleTestArray} disabled={isEdgar}>
            Setar New
          </button>
        </>
      )}
    </section>
  );
};

export default UseStatStd;
