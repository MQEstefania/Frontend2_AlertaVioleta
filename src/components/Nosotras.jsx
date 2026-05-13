import '../styles/home.css'

function Nosotras() {

  return (

    <section
      id='nosotras'
      className='nosotras-section'
    >

      <div className='nosotras-container'>

        <h2>

          💜 Nosotras

        </h2>

        <p className='nosotras-text'>

          Alerta Violeta nace como una
          iniciativa social y tecnológica
          enfocada en el acompañamiento,
          la prevención y la atención de
          violencias basadas en género.

          Buscamos construir espacios
          seguros, accesibles y humanos
          para mujeres y personas en
          situación de vulnerabilidad.

        </p>

        <div className='nosotras-grid'>

          {/* MISIÓN */}

          <div className='nosotras-card'>

            <h3>

              🌱 Misión

            </h3>

            <p>

              Brindar herramientas de
              apoyo, orientación y
              acompañamiento mediante
              tecnología accesible,
              fortaleciendo redes de
              cuidado y atención integral.

            </p>

          </div>

          {/* VISIÓN */}

          <div className='nosotras-card'>

            <h3>

              ✨ Visión

            </h3>

            <p>

              Convertirnos en una red
              digital referente en la
              prevención y atención de
              violencias de género,
              promoviendo autonomía,
              protección y bienestar.

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Nosotras