import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import authService from '../services/authService'

import BackButton from '../components/BackButton'

import '../styles/forms.css'

function UsuariaRegistro() {

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const [formData, setFormData] = useState({

    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    fechaNacimiento: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        'Las contraseñas no coinciden'
      )

      return
    }

    try {

      authService.register({

        ...formData,

        fechaRegistro:
          new Date().toISOString()
      })

      navigate('/login')

    } catch (err) {

      setError(err.message)
    }
  }

  return (

    <div className='auth-page'>

      <div className='auth-card shadow-lg'>

        <BackButton />

        <h1 className='auth-title'>

          💜 Registro Usuaria

        </h1>

        {

          error && (

            <div className='alert alert-danger'>

              {error}

            </div>
          )
        }

        <form onSubmit={handleSubmit}>

          <div className='row'>

            <div className='col-md-6 mb-3'>

              <label className='form-label'>

                Nombre completo

              </label>

              <input
                type='text'
                name='nombre'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

            <div className='col-md-6 mb-3'>

              <label className='form-label'>

                Correo

              </label>

              <input
                type='email'
                name='email'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

          </div>

          <div className='row'>

            <div className='col-md-6 mb-3'>

              <label className='form-label'>

                Teléfono

              </label>

              <input
                type='tel'
                name='telefono'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

            <div className='col-md-6 mb-3'>

              <label className='form-label'>

                Ciudad

              </label>

              <input
                type='text'
                name='ciudad'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

          </div>

          <div className='mb-3'>

            <label className='form-label'>

              Fecha de nacimiento

            </label>

            <input
              type='date'
              name='fechaNacimiento'
              className='form-control'
              required
              onChange={handleChange}
            />

          </div>

          <div className='row'>

            <div className='col-md-6 mb-3'>

              <label className='form-label'>

                Contraseña

              </label>

              <input
                type='password'
                name='password'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

            <div className='col-md-6 mb-4'>

              <label className='form-label'>

                Confirmar contraseña

              </label>

              <input
                type='password'
                name='confirmPassword'
                className='form-control'
                required
                onChange={handleChange}
              />

            </div>

          </div>

          <button
            className='btn btn-purple w-100'
          >

            Registrarse

          </button>

        </form>

        <p className='text-center mt-4'>

          ¿Ya tienes cuenta?

          <Link to='/login'>

            Inicia sesión

          </Link>

        </p>

      </div>

    </div>
  )
}

export default UsuariaRegistro