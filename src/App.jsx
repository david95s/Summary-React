import React from "react";
import ArrayStd from "./components/ArrayStd";
import EventsStd from "./components/EventsStd";
import CompoStd from "./components/CompoStd";
import Input from "./components/Input";
import UseStatStd from "./components/Hooks/UseStateStd/UseStatStd";
import ExercUseSta from "./components/Hooks/UseStateStd/ExercUseSta";
import UseEffectStd from "./components/Hooks/UseEffectStd/UseEffectStd";
import Exercicios from "./components/Hooks/UseEffectStd/Exercicios";
import UseRefStd from "./components/Hooks/UseRefStd/UseRefStd";
import UseMemoStd from "./components/Hooks/UseMemoStd/UseMemoStd";
import UseCAllBackStd from "./components/Hooks/UseCAllBackStd/UseCAllBackStd";
import UseContextStd from "./components/Hooks/UseContextStd/UseContextStd";

const App = () => {
  // Toda vz q um Hook foi ativado meu component Renderiza novamente

  const defaultStyle = {
    maxWidth: "600px",
    margin: "80px auto",
  };

  return (
    <main className="grid">
      {/*Estudo de array abaixo  */}
      {/* <ArrayStd /> */}

      {/*Estudo Eventos  */}
      {/* <EventsStd /> */}

      {/*Estudo components / props */}
      {/* <CompoStd myArray={["Fomulario", "de", "compras"]}>
        <Input
          id={"email"}
          label={"Email"}
          myStyle={{ marginTop: "40px" }}
          className={"email"}
          type={"email"}
          required={true}
        />
        <Input
          id={"senha"}
          label={"Senha"}
          myStyle={{ marginTop: "40px" }}
          className={"senha"}
          type={"password"}
          required={true}
        />
        <button style={{ marginTop: "40px" }}>Enviar</button>
      </CompoStd> */}

      {/* <UseStatStd myStyle={{ color: "gold" }}>Estudo UseState</UseStatStd> */}
      {/* <div style={defaultStyle}>
        <ExercUseSta>Execicios Sobre React.useState()</ExercUseSta>
      </div> */}

      {/* <div style={defaultStyle}>
        <UseEffectStd />
        <Exercicios />
      </div> */}

      {/* <div style={defaultStyle}>
        <UseRefStd />
      </div> */}

      {/* <div style={defaultStyle}>
        <UseMemoStd />
      </div> */}
      {/* <div style={defaultStyle}>
        <UseCAllBackStd />
      </div> */}

      <div style={{ ...defaultStyle, maxWidth: "800px" }}>
        <UseContextStd />
      </div>
    </main>
  );
};

export default App;
