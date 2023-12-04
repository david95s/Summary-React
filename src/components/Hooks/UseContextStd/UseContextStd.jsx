import React from "react";
import { ContextoProvider } from "./ContextoUsuario";
import Prodto from "./Prodto";
import ExerciciosContext from "./Exercicios/ExerciciosContext";
const UseContextStd = () => {
  return (
    <ContextoProvider>
      <Prodto />
      <ExerciciosContext />
    </ContextoProvider>
  );
};

export default UseContextStd;
