import React from "react";

function CompoStd({ children, myArray }) {
  //myArray só pra mostras q em props posso passar array, obj e qlr tipo de dado

  const stringTextTile = myArray.join(" ");
  return (
    <form>
      <p style={{ color: "gold", fontSize: "20px" }}>{stringTextTile}</p>
      {children}
    </form>
  );
}

export default CompoStd;
