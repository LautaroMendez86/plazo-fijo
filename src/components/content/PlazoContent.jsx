import { createContext, useState } from "react";

export const PlazoContext = createContext();

export const PlazoContextProvider = (props) => {
  const [capital, setCapital] = useState(0);

  const [dias, setDias] = useState(0);

  const [porcentaje, setPorcentaje] = useState(0);

  const [resultado, setResultado] = useState(0)

  const [total, setTotal] = useState(0);

  

  const  calcularResultado = () => {

   setTotal(Math.round((porcentaje / 100 / 365) * capital * dias) + Number(capital));
   setResultado(Math.round((porcentaje / 100 / 365) * capital * dias))
  };

 
  

    
 
  return (
    <PlazoContext.Provider
      value={{
        setCapital,
        setDias,
        setPorcentaje,
        calcularResultado,
        resultado,
        capital,
        total
      }}
    >
      {props.children}
    </PlazoContext.Provider>
  );
};
