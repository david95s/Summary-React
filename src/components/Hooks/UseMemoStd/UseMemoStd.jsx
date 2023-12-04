import React from "react";

/*
  Memoriza um valor, evitando a recriação do
  mesmo todas as vezes em que um componente
  for atualizado. Recebe um callback e uma array de dependências.
*/

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const UseMemoStd = () => {
  const [myValue, setMyValue] = React.useState(0);

  const t1 = performance.now();
  const valor = React.useMemo(() => {
    //UseMemmo contrario do Effect ele retorna um valor
    return operacaoLenta();
  }, []);
  // const t1 = performance.now();
  console.log(performance.now() - t1);

  function handleClick() {
    setMyValue(myValue + 1);
    console.log(valor);
  }

  return (
    <section>
      <p>{myValue}</p>
      <button onClick={handleClick}>click</button>
      <h2>UseMemo</h2>
    </section>
  );
};

export default UseMemoStd;
