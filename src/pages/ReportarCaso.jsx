import { useState } from 'react'

import BackButton from '../components/BackButton'

import reportesService from '../services/reportesService'

import '../styles/forms.css'

function ReportarCaso() {

  const [formData, setFormData] =
    useState({

      nombre: '',
      telefono: '',
      email: '',
      tipoViolencia: '',
      descripcion: '',
      ubicacion: '',
      fecha: '',
      urgencia: ''
    })

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    reportesService.guardarReporte({

      id: Date.now(),

      ...formData,

      estado: 'pendiente',

      fechaReporte:
        new Date().toISOString()
    })

    alert('✅ Reporte enviado')

    setFormData({

      nombre: '',
      telefono: '',
      email: '',
      tipoViolencia: '',
      descripcion: '',
      ubicacion: '',
      fecha: '',
      urgencia: ''
    })
  }

  return (

    <div className='auth-page'>

      <div className='auth-card shadow-lg'>

        <BackButton />

        <h1 className='auth-title'>

          📢 Reportar Caso

        </h1>

        <form onSubmit={handleSubmit}>

          <div className='row'>

            <div className='col-md-6 mb-3'>

              <input
                type='text'
                name='nombre'
                className='form-control'
                placeholder='Nombre'
                required
                value={formData.nombre}
                onChange={handleChange}
              />

            </div>

            <div className='col-md-6 mb-3'>

              <input
                type='tel'
                name='telefono'
                className='form-control'
                placeholder='Teléfono'
                required
                value={formData.telefono}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className='mb-3'>

            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Correo'
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className='mb-3'>

            <select
              name='tipoViolencia'
              className='form-control'
              required
              value={
                formData.tipoViolencia
              }
              onChange={handleChange}
            >

              <option value=''>

                Tipo de violencia

              </option>

              <option value='fisica'>

                Física

              </option>

              <option value='psicologica'>

                Psicológica

              </option>

              <option value='sexual'>

                Sexual

              </option>

            </select>

          </div>

          <div className='mb-3'>

            <textarea
              name='descripcion'
              className='form-control'
              rows='5'
              placeholder='Describe el caso'
              required
              value={formData.descripcion}
              onChange={handleChange}
            />

          </div>

          <div className='mb-3'>

            <input
              type='text'
              name='ubicacion'
              className='form-control'
              placeholder='Ubicación'
              required
              value={formData.ubicacion}
              onChange={handleChange}
            />

          </div>

          <div className='row'>

            <div className='col-md-6 mb-4'>

              <input
                type='date'
                name='fecha'
                className='form-control'
                required
                value={formData.fecha}
                onChange={handleChange}
              />

            </div>

            <div className='col-md-6 mb-4'>

              <select
                name='urgencia'
                className='form-control'
                required
                value={formData.urgencia}
                onChange={handleChange}
              >

                <option value=''>

                  Nivel urgencia

                </option>

                <option value='baja'>

                  Baja

                </option>

                <option value='media'>

                  Media

                </option>

                <option value='alta'>

                  Alta

                </option>

                <option value='critica'>

                  Crítica

                </option>

              </select>

            </div>

          </div>

          <button
            className='btn btn-purple w-100'
          >

            Enviar Reporte

          </button>

        </form>

      </div>

    </div>
  )
}

export default ReportarCaso