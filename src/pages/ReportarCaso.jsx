import { useState } from 'react'
function ReportarCaso() {
// Datos del formulario
const [formData, setFormData] = useState({
nombre: '',
telefono: '',
email: '',
tipoViolencia: '',
descripcion: '',
ubicacion: '',
fecha: '',
urgencia: ''
})
// Actualizar formulario
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
})
}
// Enviar reporte
const handleSubmit = (e) => {
e.preventDefault()
// Obtener reportes guardados
const reportes = JSON.parse(
localStorage.getItem('reportesEmergencia')
) || []
// Crear nuevo reporte
const nuevoReporte = {
id: Date.now(),
...formData,
estado: 'pendiente',
fechaReporte: new Date().toISOString()
}
// Agregar reporte
reportes.push(nuevoReporte)
// Guardar nuevamente
localStorage.setItem(
'reportesEmergencia',
JSON.stringify(reportes)
)
alert('Reporte enviado correctamente')
}
return (
<div className='container'>
<h1>Reportar Caso</h1>
<form onSubmit={handleSubmit}>
<input
type='text'
name='nombre'
placeholder='Nombre'
onChange={handleChange}
required
/>
<input
type='tel'
name='telefono'
placeholder='Teléfono'
onChange={handleChange}
required
/>
<input
type='email'
name='email'
placeholder='Correo'
onChange={handleChange}
/>
<select
name='tipoViolencia'
onChange={handleChange}
required
>
<option value=''>Seleccione</option>
<option value='fisica'>Física</option>
<option value='psicologica'>Psicológica</option>
<option value='sexual'>Sexual</option>
<option value='economica'>Económica</option>
</select>
<textarea
name='descripcion'
placeholder='Descripción'
onChange={handleChange}
required
/>
<input
type='text'
name='ubicacion'
placeholder='Ubicación'
onChange={handleChange}
required
/>
<input
type='date'
name='fecha'
onChange={handleChange}
required
/>
<select
name='urgencia'
onChange={handleChange}
required
>
<option value=''>Urgencia</option>
<option value='baja'>Baja</option>
<option value='media'>Media</option>
<option value='alta'>Alta</option>
<option value='critica'>Crítica</option>
</select>
<button type='submit'>
Enviar Reporte
</button>
</form>
</div>
)
}
export default ReportarCaso