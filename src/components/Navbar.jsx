// Link permite navegar
import { Link } from 'react-router-dom'

// Importar logo
import logo from '../assets/logo.png'

// Importar estilos
import '../styles/home.css'

function Navbar() {

  return (

    <>

      {/* BARRA SUPERIOR */}
      <header className='topbar'>

        <nav>

          {/* Navegar login */}
          <Link to='/login'>
            👩 Usuarias
          </Link>

          {/* Navegar profesionales */}
          <Link to='/registro'>
            👩‍⚕️ Profesionales
          </Link>

          {/* Navegar admin */}
          <Link to='/admin'>
            🔒 Administrador
          </Link>

          {/* Navegar reportar */}
          <Link to='/reportar'>
            📢 Reportar
          </Link>

        </nav>

      </header>

      {/* NAVBAR PRINCIPAL */}
      <section className='navbar'>

        {/* Logo */}
        <img
          src={logo}
          alt='Logo'
          className='logo'
        />

        {/* Botones menú */}
        <div className='menu-buttons'>

          <button>Nosotras</button>

          <button>Alianzas</button>

          <button>Servicios</button>

        </div>

      </section>

    </>
  )
}

// Exportar componente
export default Navbar