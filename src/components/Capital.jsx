import React, { useContext } from "react";
import { PlazoContext } from "./content/PlazoContent";

export const Capital = () => {
  const { setCapital } = useContext(PlazoContext);

  console.log('prueba1')

  return (
    <>
      <div className="contenedor">
        <p>Capital a convertir</p>
        <input
          type={"number"}
          min={1}
          placeholder="Ingrese el capital"
          onChange={(e) => {
            setCapital(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
