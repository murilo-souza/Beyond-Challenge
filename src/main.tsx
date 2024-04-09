import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import { CoordinatesContextProvider } from './context/coordinates-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoordinatesContextProvider>
      <App />
    </CoordinatesContextProvider>
  </React.StrictMode>,
)
