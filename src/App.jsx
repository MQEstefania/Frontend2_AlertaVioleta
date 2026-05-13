// Importar rutas
import { Routes, Route } from 'react-router-dom'

// Importar páginas
import Home from './pages/Home'
import UsuariaLogin from './pages/UsuariaLogin'
import UsuariaRegistro from './pages/UsuariaRegistro'
import ReportarCaso from './pages/ReportarCaso'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (

    // Todas las rutas del proyecto
    <Routes>

      {/* Página principal */}
      <Route path='/' element={<Home />} />

      {/* Login usuarias */}
      <Route path='/login' element={<UsuariaLogin />} />

      {/* Registro */}
      <Route path='/registro' element={<UsuariaRegistro />} />

      {/* Reportar */}
      <Route path='/reportar' element={<ReportarCaso />} />

      {/* Admin */}
      <Route path='/admin' element={<AdminLogin />} />

      {/* Dashboard admin */}
      <Route
        path='/admin-dashboard'
        element={<AdminDashboard />}
      />

    </Routes>
  )
}

// Exportar componente
export default App