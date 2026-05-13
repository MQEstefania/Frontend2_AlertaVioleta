import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/admin.css'

function AdminDashboard() {

  const navigate = useNavigate()

  // ESTADOS
  const [usuarios, setUsuarios] = useState([])
  const [citas, setCitas] = useState([])
  const [reportes, setReportes] = useState([])

  // CARGAR DATOS
  useEffect(() => {

    const usuariosGuardados =
      JSON.parse(localStorage.getItem('usuarios')) || []

    const citasGuardadas =
      JSON.parse(localStorage.getItem('citasProfesionales')) || []

    const reportesGuardados =
      JSON.parse(localStorage.getItem('reportes')) || []

    setUsuarios(usuariosGuardados)
    setCitas(citasGuardadas)
    setReportes(reportesGuardados)

  }, [])

  // ELIMINAR USUARIA
  const eliminarUsuaria = (email) => {

    const confirmar =
      window.confirm('¿Eliminar usuaria?')

    if (!confirmar) return

    const nuevasUsuarias = usuarios.filter(
      usuario => usuario.email !== email
    )

    localStorage.setItem(
      'usuarios',
      JSON.stringify(nuevasUsuarias)
    )

    setUsuarios(nuevasUsuarias)
  }

  // ELIMINAR REPORTE
  const eliminarReporte = (id) => {

    const nuevosReportes = reportes.filter(
      reporte => reporte.id !== id
    )

    localStorage.setItem(
      'reportes',
      JSON.stringify(nuevosReportes)
    )

    setReportes(nuevosReportes)
  }

  // CERRAR SESIÓN
  const cerrarSesion = () => {
    navigate('/')
  }

  return (

    <div className='admin-layout'>

      {/* SIDEBAR */}

      <aside className='admin-sidebar'>

        <div>

          <h2>🔒 Admin</h2>

          <p>Gestión general</p>

        </div>

        <button
          className='logout-btn'
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>

      </aside>

      {/* MAIN */}

      <main className='admin-main'>

        {/* HEADER */}

        <div className='admin-header'>

          <h1>
            Dashboard Administrativo
          </h1>

          <p>
            Gestión de usuarias,
            reportes y citas.
          </p>

        </div>

        {/* ESTADÍSTICAS */}

        <div className='stats-grid'>

          <div className='stat-card'>
            <h3>👩 Usuarias</h3>
            <span>{usuarios.length}</span>
          </div>

          <div className='stat-card'>
            <h3>📅 Citas</h3>
            <span>{citas.length}</span>
          </div>

          <div className='stat-card'>
            <h3>🚨 Reportes</h3>
            <span>{reportes.length}</span>
          </div>

        </div>

        {/* USUARIAS */}

        <section className='admin-section'>

          <h2>
            👩 Usuarias Registradas
          </h2>

          {usuarios.length === 0 ? (

            <div className='empty-card'>
              No hay usuarias.
            </div>

          ) : (

            <div className='table-container'>

              <table>

                <thead>

                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Ciudad</th>
                    <th>Acción</th>
                  </tr>

                </thead>

                <tbody>

                  {usuarios.map((usuario, index) => (

                    <tr key={index}>

                      <td>{usuario.nombre}</td>

                      <td>{usuario.email}</td>

                      <td>{usuario.ciudad}</td>

                      <td>

                        <button
                          className='delete-btn'
                          onClick={() =>
                            eliminarUsuaria(usuario.email)
                          }
                        >
                          Eliminar
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

        {/* REPORTES */}

        <section className='admin-section'>

          <h2>🚨 Reportes</h2>

          {reportes.length === 0 ? (

            <div className='empty-card'>
              No hay reportes.
            </div>

          ) : (

            <div className='cards-grid'>

              {reportes.map((reporte) => (

                <div
                  key={reporte.id}
                  className='admin-card'
                >

                  <h4>
                    🚨 {reporte.tipoViolencia}
                  </h4>

                  <p>
                    <strong>Nombre:</strong>
                    {' '}
                    {reporte.nombre}
                  </p>

                  <p>
                    <strong>Teléfono:</strong>
                    {' '}
                    {reporte.telefono}
                  </p>

                  <p>
                    <strong>Correo:</strong>
                    {' '}
                    {reporte.email}
                  </p>

                  <p>
                    <strong>Ubicación:</strong>
                    {' '}
                    {reporte.ubicacion}
                  </p>

                  <p>
                    <strong>Fecha:</strong>
                    {' '}
                    {reporte.fecha}
                  </p>

                  <p>
                    <strong>Urgencia:</strong>
                    {' '}
                    {reporte.urgencia}
                  </p>

                  <p>
                    <strong>Descripción:</strong>
                    {' '}
                    {reporte.descripcion}
                  </p>

                  <p>
                    <strong>Estado:</strong>
                    {' '}
                    {reporte.estado}
                  </p>

                  <button
                    className='delete-btn'
                    onClick={() =>
                      eliminarReporte(reporte.id)
                    }
                  >
                    Eliminar reporte
                  </button>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* CITAS */}

        <section className='admin-section'>

          <h2>📅 Citas</h2>

          {citas.length === 0 ? (

            <div className='empty-card'>
              No hay citas.
            </div>

          ) : (

            <div className='cards-grid'>

              {citas.map((cita) => (

                <div
                  key={cita.id}
                  className='admin-card'
                >

                  <h4>{cita.tipoProfesional}</h4>

                  <p>
                    <strong>Usuaria:</strong>
                    {' '}
                    {cita.usuarioEmail}
                  </p>

                  <p>
                    <strong>Fecha:</strong>
                    {' '}
                    {cita.fecha}
                  </p>

                  <p>
                    <strong>Hora:</strong>
                    {' '}
                    {cita.hora}
                  </p>

                  <p>
                    <strong>Estado:</strong>
                    {' '}
                    {cita.estado}
                  </p>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  )
}

export default AdminDashboard