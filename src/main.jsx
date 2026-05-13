// Importamos React
import React from 'react'

// Conecta React con el HTML
import ReactDOM from 'react-dom/client'

// Manejo de rutas
import { BrowserRouter } from 'react-router-dom'

// Estilos globales
import './index.css'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Componente principal
import App from './App'

// Renderizar aplicación
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* Activar rutas */}
    <BrowserRouter>

      <App />

    </BrowserRouter>

  </React.StrictMode>
)