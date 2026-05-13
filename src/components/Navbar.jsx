import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

import '../styles/home.css'

function Navbar() {

  return (

    <header className='header-fixed'>

      {/* TOPBAR */}

<div className='topbar'>

  <nav>

    <Link to='/login'>

      <button className='top-btn'>

         Usuarias

      </button>

    </Link>

    <Link to='/registro'>

      <button className='top-btn'>

         Registro

      </button>

    </Link>

    <Link to='/admin'>

      <button className='top-btn'>

         Admin

      </button>

    </Link>

    <Link to='/reportar'>

      <button className='top-btn'>

         Reportar

      </button>

    </Link>

  </nav>

</div>

      {/* NAVBAR */}

      <div className='navbar'>

        <img
          src={logo}
          alt='Logo'
          className='logo'
        />

        <div className='menu-buttons'>

          <a href='#nosotras'>

            <button>

              Nosotras

            </button>

          </a>

          <button>

            Alianzas

          </button>

          <button>

            Servicios

          </button>

        </div>

      </div>

    </header>
  )
}

export default Navbar