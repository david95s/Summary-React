import React from "react";

/*
  Permite definirmos um callback e uma lista de 
  dependências do callback. 
  Esse callback só será recriado se essa lista 
  de dependências for modificada, caso contrário 
  ele não irá recriar o callback.
*/

const UseCAllBackStd = () => {
  /*
    Dificilmente você irá encontrar um cenário 
    em que essa função seja útil
  */
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  //Essa de baixo é criada toda vez q o app atualiza
  //Só q essa operação é superrapda, por isso dificilmente vai precisar de usar o usecallback
  // function handleClick() {
  //   setContar((contar) => contar + 1);
  // }

  return <button onClick={handleClick}>{contar}</button>;
};

export default UseCAllBackStd;
