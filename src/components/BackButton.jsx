// Link permite navegar
import { Link } from 'react-router-dom'

// Importar estilos
import '../styles/forms.css'

function BackButton() {

  return (

    // Link para volver al home
    <Link to='/' className='back-link'>

      ← Volver al inicio

    </Link>
  )
}

// Exportar componente
export default BackButton