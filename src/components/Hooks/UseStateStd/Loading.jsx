import React from "react";

const Loading = () => {
  const myStyles = {
    position: "absolute",
    top: "180px",
    left: "50%",
    marginLeft: "-90px",
    color: "pink",
  };

  return <div style={myStyles}>CARREGANDO....</div>;
};

export default Loading;
