// Imagen lateral
import redes from '../assets/redes.jpg'

// Importar estilos
import '../styles/home.css'

function Redes() {

  return (

    <section className='redes'>

      {/* Texto */}
      <div className='texto'>

        <h2>Tejiendo Redes de Cuidado</h2>

        <p>
          La violencia de género sigue amenazando
          la seguridad y libertad de las mujeres.
        </p>

        <p>
          Alerta Violeta conecta usuarias,
          profesionales y organizaciones.
        </p>

        {/* Botones */}
        <div className='botones'>

          <button className='btn-morado'>
            🤍 DONAR
          </button>

          <button className='btn-blanco'>
            💜 UNIRME
          </button>

        </div>

      </div>

      {/* Imagen */}
      <img
        src={redes}
        alt='Redes'
        className='redes-img'
      />

    </section>
  )
}

export default Redes