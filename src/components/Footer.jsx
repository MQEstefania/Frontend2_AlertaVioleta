// Importar estilos
import '../styles/home.css'

function Footer() {

  return (

    <footer className='footer'>

      <h3>Alerta Violeta</h3>

      <p>
        Innovación social con enfoque feminista
      </p>

      {/* Redes sociales */}
      <div className='social-icons'>

        {/* Instagram */}
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noreferrer'
        >

          <i className='bi bi-instagram'></i>

        </a>

        {/* Facebook */}
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noreferrer'
        >

          <i className='bi bi-facebook'></i>

        </a>

        {/* Twitter */}
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noreferrer'
        >

          <i className='bi bi-twitter-x'></i>

        </a>

        {/* TikTok */}
        <a
          href='https://tiktok.com'
          target='_blank'
          rel='noreferrer'
        >

          <i className='bi bi-tiktok'></i>

        </a>

      </div>

      <p className='copy'>
        © 2025 Alerta Violeta
      </p>

    </footer>
  )
}

export default Footer