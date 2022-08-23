import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PlazoContextProvider } from './components/content/PlazoContent'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlazoContextProvider>
      <App />
    </PlazoContextProvider>
  </React.StrictMode>
)
