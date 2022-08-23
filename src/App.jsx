import React from 'react'
import { Capital } from './components/Capital'
import { Dias } from './components/Dias'
import { Porcentaje } from './components/Porcentaje'
import { Resultado } from './components/Resultado'

const App = () => {

  return (
    <>
    <form className='container'>
      <Capital/>
      <Dias/>
      <Porcentaje/>
      <Resultado/>
    </form>
    </>
    
  )
}

export default App
