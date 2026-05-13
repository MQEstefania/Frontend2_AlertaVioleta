import { Link } from 'react-router-dom'

import banner from '../assets/banner.jpg'

import '../styles/home.css'

function Hero() {

  return (

    <section
      className='hero'
      style={{
        backgroundImage:
          `url(${banner})`
      }}
    >

   <div className='overlay'>

  <h1>

    Alerta Violeta

  </h1>

  <div className='hero-text'>
    <p>

      Transformamos la tecnología en
      redes de cuidado.

    </p>

    <p>

      Alerta Violeta conecta mujeres,
      profesionales y comunidades para
      construir espacios más seguros,
      humanos y solidarios frente a las
      violencias basadas en género.

    </p>

    <p>

      Este es un entorno donde la
      tecnología se convierte en apoyo,
      escucha y acompañamiento.

      Aquí podrás acceder a orientación
      profesional, reportar situaciones
      de riesgo y encontrar recursos
      pensados desde la protección y el 
      bienestar colectivo.

    </p>

    <p className='hero-final'>

      Porque ninguna mujer debería
      sentirse sola frente a la violencia.

    </p>

  </div>

  <button className='hero-btn'>

    ACTÚA AHORA-REGÍSTRATE

  </button>

</div>

    </section>
  )
}

export default Hero