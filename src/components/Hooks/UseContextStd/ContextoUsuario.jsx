import React from "react";

export const ContextoUsuario = React.createContext();

export const ContextoProvider = ({ children }) => {
  const [produto, setProduto] = React.useState([]);

  function addProduto(newProduct) {
    console.log(newProduct);
    setProduto((antigo) => {
      return [...antigo, newProduct];
    });
  }

  return (
    <ContextoUsuario.Provider value={[produto, addProduto]}>
      {children}
    </ContextoUsuario.Provider>
  );
};
