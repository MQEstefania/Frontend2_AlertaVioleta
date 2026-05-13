import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import BackButton from '../components/BackButton'

import '../styles/forms.css'

function AdminLogin() {

  const navigate = useNavigate()

  const [usuario, setUsuario] =
    useState('')

  const [clave, setClave] =
    useState('')

  const [error, setError] =
    useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      usuario === 'admin' &&
      clave === 'admin123'
    ) {

      navigate('/admin-dashboard')

    } else {

      setError(
        'Credenciales incorrectas'
      )
    }
  }

  return (

    <div className='auth-page'>

      <div className='auth-card shadow-lg'>

        <BackButton />

        <h1 className='auth-title'>

          🔒 Administrador

        </h1>

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

              Usuario

            </label>

            <input
              type='text'
              className='form-control'
              required
              onChange={(e) =>
                setUsuario(e.target.value)
              }
            />

          </div>

          <div className='mb-4'>

            <label className='form-label'>

              Contraseña

            </label>

            <input
              type='password'
              className='form-control'
              required
              onChange={(e) =>
                setClave(e.target.value)
              }
            />

          </div>

          <button
            className='btn btn-purple w-100'
          >

            Ingresar

          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin