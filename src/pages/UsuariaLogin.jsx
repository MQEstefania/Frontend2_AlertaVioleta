import { useState } from 'react'

import {

  Link,
  useNavigate

} from 'react-router-dom'

import BackButton from '../components/BackButton'

import authService from '../services/authService'

import '../styles/forms.css'

function UsuariaLogin() {

  const navigate = useNavigate()

  const [formData, setFormData] =
    useState({

      email: '',
      password: ''
    })

  const [error, setError] =
    useState('')

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    try {

      authService.login(

        formData.email,

        formData.password
      )

      navigate('/dashboard')

    } catch (err) {

      setError(err.message)
    }
  }

  return (

    <div className='auth-page'>

      <div className='auth-card shadow-lg'>

        <BackButton />

        <h1 className='auth-title'>

          🔐 Iniciar Sesión

        </h1>

        <p className='auth-subtitle'>

          Bienvenida a Alerta Violeta

        </p>

        {

          error && (

            <div className='alert alert-danger'>

              {error}

            </div>
          )
        }

        <form onSubmit={handleSubmit}>

          <div className='mb-3'>

            <label className='form-label'>

              Correo electrónico

            </label>

            <input
              type='email'
              name='email'
              className='form-control'
              required
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className='mb-4'>

            <label className='form-label'>

              Contraseña

            </label>

            <input
              type='password'
              name='password'
              className='form-control'
              required
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <button
            className='btn btn-purple w-100'
          >

            Ingresar

          </button>

        </form>

        <p className='text-center mt-4'>

          ¿No tienes cuenta?

          {' '}

          <Link to='/registro'>

            Regístrate

          </Link>

        </p>

      </div>

    </div>
  )
}

export default UsuariaLogin