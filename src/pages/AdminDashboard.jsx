import { useEffect, useState } from 'react'
function AdminDashboard() {
// Guardar reportes
const [reportes, setReportes] = useState([])
// Cargar reportes
useEffect(() => {
cargarReportes()
}, [])
// Función cargar
const cargarReportes = () => {
const data = JSON.parse(
localStorage.getItem('reportesEmergencia')
) || []
setReportes(data)
}
// Eliminar reporte
const eliminarReporte = (id) => {
const nuevos = reportes.filter(
reporte => reporte.id !== id
)
localStorage.setItem(
'reportesEmergencia',
JSON.stringify(nuevos)
)
setReportes(nuevos)
}
return (
<div className='container'>
<h1>Panel Administrador</h1>
<h2>
Total reportes:
{' '}
{reportes.length}
</h2>
{
reportes.map((reporte) => (
<div
key={reporte.id}
className='reporte-card'
>
<h3>{reporte.nombre}</h3>
<p>
<strong>Teléfono:</strong>
{' '}
{reporte.telefono}
</p>
<p>
<strong>Descripción:</strong>
{' '}
{reporte.descripcion}
</p>
<p>
<strong>Urgencia:</strong>
{' '}
{reporte.urgencia}
</p>
<button
onClick={() => eliminarReporte(reporte.id)}
>
Eliminar
</button>
</div>
))
}
</div>
)
}
export default AdminDashboard