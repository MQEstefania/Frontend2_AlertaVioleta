// Link para navegar
import { Link } from 'react-router-dom'

// Banner
import banner from '../assets/banner.jpg'

// Importar estilos
import '../styles/home.css'

function Hero() {

  return (

    <section
      className='hero'

      // Imagen de fondo dinámica
      style={{
        backgroundImage: `url(${banner})`
      }}
    >

      {/* Capa oscura */}
      <div className='overlay'>

        <h1>Alerta Violeta</h1>

        <p>
          Innovamos en protección y cuidado colectivo
          para erradicar la violencia de género.
        </p>

        {/* Botón registro */}
        <Link to='/registro'>

          <button className='hero-btn'>

            ACTÚA AHORA

          </button>

        </Link>

      </div>

    </section>
  )
}

export default Hero