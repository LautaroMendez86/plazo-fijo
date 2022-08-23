import React, { useContext } from "react";
import { PlazoContext } from "./content/PlazoContent";

export const Resultado = () => {
  const { calcularResultado, resultado, total } = useContext(PlazoContext);

  return (
    <>
      <div className="contenedor-resultado">
        <button
          onClick={(e) => {
            calcularResultado();
            e.preventDefault();
          }}
        >
          Convertir
        </button>
        <div className="res">
          <p className="parrafo">Capital final: {total}$</p>
          <p className="parrafo">Interés obtenido: {resultado}$</p>
        </div>
      </div>
    </>
  );
};
