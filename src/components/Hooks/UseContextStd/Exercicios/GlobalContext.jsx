import React from "react";

const exerciciosStyle = {
  background: "#35343b",
  padding: "18px 55px",
  marginTop: "80px",
  borderRadius: "2px",
};

export const Global = React.createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
      const json = await data.json();
      setData(json);
    }
    getData();
  }, []);

  function clearData() {
    setData([]);
  }

  return (
    <Global.Provider value={{ data, clearData }}>{children}</Global.Provider>
  );
};
