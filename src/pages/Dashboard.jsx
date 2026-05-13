import {

  useEffect,
  useState

} from 'react'

import { useNavigate } from 'react-router-dom'

import authService from '../services/authService'

import citasService from '../services/citasService'

import '../styles/dashboard.css'

function Dashboard() {

  const navigate = useNavigate()

  // =========================
  // USUARIO
  // =========================

  const [usuario, setUsuario] =
    useState(null)

  // =========================
  // SECCIÓN ACTIVA
  // =========================

  const [activeSection, setActiveSection] =
    useState('perfil')

  // =========================
  // EDITAR PERFIL
  // =========================

  const [editandoPerfil, setEditandoPerfil] =
    useState(false)

  // =========================
  // CITAS
  // =========================

  const [citas, setCitas] =
    useState([])

  // =========================
  // FORMULARIO CITAS
  // =========================

  const [formData, setFormData] =
    useState({

      tipoProfesional: '',

      motivo: '',

      fecha: '',

      hora: '',

      modalidad: ''
    })

  // =========================
  // CARGAR USUARIO
  // =========================

  useEffect(() => {

    const usuarioActual =
      authService.getCurrentUser()

    if (!usuarioActual) {

      navigate('/login')

      return
    }

    setUsuario(usuarioActual)

    cargarCitas(
      usuarioActual.email
    )

  }, [])

  // =========================
  // OBTENER CITAS
  // =========================

  const cargarCitas = (email) => {

    const data =
      citasService.obtenerCitas(email)

    setCitas(data)
  }

  // =========================
  // EDITAR PERFIL INPUTS
  // =========================

  const handleUsuarioChange = (e) => {

    setUsuario({

      ...usuario,

      [e.target.name]:
        e.target.value
    })
  }

  // =========================
  // GUARDAR PERFIL
  // =========================

  const guardarPerfil = (e) => {

    e.preventDefault()

    const usuarios = JSON.parse(

      localStorage.getItem('usuarios')

    ) || []

    const actualizados = usuarios.map(

      (item) =>

        item.email === usuario.email

          ? usuario

          : item
    )

    localStorage.setItem(

      'usuarios',

      JSON.stringify(actualizados)
    )

    localStorage.setItem(

      'usuarioActual',

      JSON.stringify(usuario)
    )

    setEditandoPerfil(false)

    alert(
      '✅ Perfil actualizado'
    )
  }

  // =========================
  // INPUTS CITAS
  // =========================

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    })
  }

  // =========================
  // GUARDAR CITA
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault()

    const nuevaCita = {

      id: Date.now(),

      usuarioEmail:
        usuario.email,

      ...formData,

      estado: 'Pendiente'
    }

    citasService.guardarCita(
      nuevaCita
    )

    cargarCitas(usuario.email)

    alert(
      '✅ Cita agendada'
    )

    setFormData({

      tipoProfesional: '',

      motivo: '',

      fecha: '',

      hora: '',

      modalidad: ''
    })
  }

  // =========================
  // LOGOUT
  // =========================

  const cerrarSesion = () => {

    authService.logout()

    navigate('/login')
  }

  // =========================
  // LOADING
  // =========================

  if (!usuario) return null

  return (

    <div className='dashboard-container'>

      {/* SIDEBAR */}

      <aside className='sidebar'>

        <div>

          <h2>

            💜 Mi Cuenta

          </h2>

          <nav>

            <button
              className={
                activeSection === 'perfil'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveSection('perfil')
              }
            >

              👤 Perfil

            </button>

            <button
              className={
                activeSection === 'citas'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveSection('citas')
              }
            >

              📅 Agendar cita

            </button>

            <button
              className={
                activeSection ===
                'mis-citas'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveSection(
                  'mis-citas'
                )
              }
            >

              📋 Mis citas

            </button>

            <button
              className={
                activeSection ===
                'recursos'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveSection(
                  'recursos'
                )
              }
            >

              📚 Recursos

            </button>

          </nav>

        </div>

        {/* LOGOUT */}

        <button
          className='logout-btn'
          onClick={cerrarSesion}
        >

          🚪 Cerrar sesión

        </button>

      </aside>

      {/* MAIN */}

      <main className='main-content'>

        <header className='dashboard-header'>

          <h1>

            Bienvenida,
            {' '}
            {usuario.nombre}

          </h1>

          <p>

            Espacio seguro y de
            acompañamiento

          </p>

        </header>

        {/* PERFIL */}

        {

          activeSection === 'perfil' && (

            <section>

              <h2>

                👤 Mi Perfil

              </h2>

              <div className='profile-card'>

                {

                  !editandoPerfil ? (

                    <>

                      <div className='info-item'>

                        <strong>
                          Nombre:
                        </strong>

                        <span>
                          {usuario.nombre}
                        </span>

                      </div>

                      <div className='info-item'>

                        <strong>
                          Correo:
                        </strong>

                        <span>
                          {usuario.email}
                        </span>

                      </div>

                      <div className='info-item'>

                        <strong>
                          Teléfono:
                        </strong>

                        <span>
                          {usuario.telefono}
                        </span>

                      </div>

                      <div className='info-item'>

                        <strong>
                          Ciudad:
                        </strong>

                        <span>
                          {usuario.ciudad}
                        </span>

                      </div>

                      <div className='info-item'>

                        <strong>
                          Fecha nacimiento:
                        </strong>

                        <span>

                          {
                            usuario.fechaNacimiento
                          }

                        </span>

                      </div>

                      <div className='mt-4'>

                        <button
                          className='btn btn-purple'
                          onClick={() =>
                            setEditandoPerfil(
                              true
                            )
                          }
                        >

                          ✏️ Editar perfil

                        </button>

                      </div>

                    </>

                  ) : (

                    <form
                      onSubmit={guardarPerfil}
                    >

                      <div className='mb-3'>

                        <label>

                          Nombre

                        </label>

                        <input
                          type='text'
                          name='nombre'
                          className='form-control'
                          value={
                            usuario.nombre
                          }
                          onChange={
                            handleUsuarioChange
                          }
                        />

                      </div>

                      <div className='mb-3'>

                        <label>

                          Teléfono

                        </label>

                        <input
                          type='text'
                          name='telefono'
                          className='form-control'
                          value={
                            usuario.telefono
                          }
                          onChange={
                            handleUsuarioChange
                          }
                        />

                      </div>

                      <div className='mb-3'>

                        <label>

                          Ciudad

                        </label>

                        <input
                          type='text'
                          name='ciudad'
                          className='form-control'
                          value={
                            usuario.ciudad
                          }
                          onChange={
                            handleUsuarioChange
                          }
                        />

                      </div>

                      <div className='mb-4'>

                        <label>

                          Fecha nacimiento

                        </label>

                        <input
                          type='date'
                          name='fechaNacimiento'
                          className='form-control'
                          value={
                            usuario.fechaNacimiento
                          }
                          onChange={
                            handleUsuarioChange
                          }
                        />

                      </div>

                      <div className='d-flex gap-3'>

                        <button
                          type='submit'
                          className='btn btn-purple'
                        >

                          Guardar cambios

                        </button>

                        <button
                          type='button'
                          className='btn btn-secondary'
                          onClick={() =>
                            setEditandoPerfil(
                              false
                            )
                          }
                        >

                          Cancelar

                        </button>

                      </div>

                    </form>
                  )
                }

              </div>

            </section>
          )
        }

      </main>

    </div>
  )
}

export default Dashboard