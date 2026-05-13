import redes from '../assets/redes.png'

import '../styles/home.css'

function Redes() {

  return (

    <section className='redes'>

      <div className='texto'>

        <h2>

          Tejiendo Redes de Cuidado

        </h2>

        <p>

          Alerta Violeta conecta
          mujeres, profesionales y
          organizaciones para crear
          redes seguras.

        </p>

        <div className='botones'>

          <button className='btn-morado'>

            🤍 DONAR

          </button>

          <button className='btn-blanco'>

            💜 UNIRME

          </button>

        </div>

      </div>

      <img
        src={redes}
        alt='Redes'
        className='redes-img'
      />

    </section>
  )
}

export default Redes