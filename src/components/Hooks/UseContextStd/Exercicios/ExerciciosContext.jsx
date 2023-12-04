import React from "react";
import { GlobalContext } from "./GlobalContext";
import TheProduct from "./TheProduct";

const ExerciciosContext = () => {
  return (
    <GlobalContext>
      <TheProduct />
    </GlobalContext>
  );
};

export default ExerciciosContext;
