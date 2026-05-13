// useState maneja estados
import { useState } from 'react'

// Navegación
import { useNavigate } from 'react-router-dom'

// Botón reutilizable
import BackButton from '../components/BackButton'

// Servicio login
import authService from '../services/authService'

// Estilos
import '../styles/forms.css'

function UsuariaLogin() {

  const navigate = useNavigate()

  // Estados formulario
  const [formData, setFormData] = useState({

    email: '',
    password: ''
  })

  // Estado error
  const [error, setError] = useState('')

  // Actualizar inputs
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  // Enviar formulario
  const handleSubmit = (e) => {

    e.preventDefault()

    try {

      // Login
      authService.login(

        formData.email,
        formData.password
      )

      // Ir dashboard
      navigate('/dashboard')

    } catch (err) {

      setError(err.message)
    }
  }

  return (

    <div className='form-container'>

      {/* Volver al inicio */}
      <BackButton />

      <h1>🔐 Iniciar Sesión</h1>

      <p>
        Accede a tu cuenta de Alerta Violeta.
      </p>

      {/* Mostrar error */}
      {error && (

        <div className='error-message'>

          ⚠️ {error}

        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div>

          <label>
            Correo electrónico:
          </label>

          <input
            type='email'
            name='email'
            required
            onChange={handleChange}
          />

        </div>

        <div>

          <label>
            Contraseña:
          </label>

          <input
            type='password'
            name='password'
            required
            onChange={handleChange}
          />

        </div>

        <button type='submit'>

          Ingresar

        </button>

      </form>

    </div>
  )
}

export default UsuariaLogin