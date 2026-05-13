import {

  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'

import Home from './pages/Home'

import UsuariaLogin from './pages/UsuariaLogin'

import UsuariaRegistro from './pages/UsuariaRegistro'

import Dashboard from './pages/Dashboard'

import ReportarCaso from './pages/ReportarCaso'

import AdminLogin from './pages/AdminLogin'

import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/login'
          element={<UsuariaLogin />}
        />

        <Route
          path='/registro'
          element={<UsuariaRegistro />}
        />

        <Route
          path='/dashboard'
          element={<Dashboard />}
        />

        <Route
          path='/reportar'
          element={<ReportarCaso />}
        />

        <Route
          path='/admin'
          element={<AdminLogin />}
        />

        <Route
          path='/admin-dashboard'
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App