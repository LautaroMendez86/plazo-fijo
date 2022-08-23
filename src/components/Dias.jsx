import React, { useContext, useEffect } from "react";
import { PlazoContext } from "./content/PlazoContent";

export const Dias = () => {
  const { setDias } = useContext(PlazoContext);

  console.log('hola1000')

  return (
    <>
      <div className="contenedor">
        <p>Duracion en dias</p>
        <input
          type={"number"}
          min={1}
          placeholder="Ingrese los dias"
          onChange={(e) => {
            setDias(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
