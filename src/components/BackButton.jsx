import { Link } from 'react-router-dom'

import '../styles/forms.css'

function BackButton() {

  return (

    <Link
      to='/'
      className='back-link'
    >

      ← Volver al inicio

    </Link>
  )
}

export default BackButton