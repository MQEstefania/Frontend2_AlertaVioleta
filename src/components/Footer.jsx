import '../styles/home.css'

function Footer() {

  return (

    <footer className='footer'>

      <h3>

        Alerta Violeta

      </h3>

      <p>

        Innovación social con
        enfoque feminista

      </p>

      <div className='social-icons'>

        <a href='#'>
          <i className='bi bi-instagram'></i>
        </a>

        <a href='#'>
          <i className='bi bi-facebook'></i>
        </a>

        <a href='#'>
          <i className='bi bi-twitter-x'></i>
        </a>

        <a href='#'>
          <i className='bi bi-tiktok'></i>
        </a>

      </div>

      <p className='copy'>

        © 2026 Alerta Violeta

      </p>
      <div className='floating-social'>

      <a href='#'>
        <i className='bi bi-instagram'></i>
      </a>

      <a href='#'>
        <i className='bi bi-facebook'></i>
      </a>

      <a href='#'>
        <i className='bi bi-twitter-x'></i>
      </a>

    </div>

    </footer>
  )
}

export default Footer