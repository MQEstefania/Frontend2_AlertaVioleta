// Guardar datos dinámicos
import { useState } from 'react'
// Navegación
import { useNavigate } from 'react-router-dom'
// Servicio de autenticación
import authService from '../services/authService'
function UsuariaRegistro() {
const navigate = useNavigate()
// Datos formulario
const [formData, setFormData] = useState({
nombre: '',
email: '',
telefono: '',
ciudad: '',
password: '',
confirmPassword: ''
})
// Estado error
const [error, setError] = useState('')
// Actualizar formulario
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
})
}
// Enviar formulario
const handleSubmit = (e) => {
e.preventDefault()
// Validar contraseñas
if (formData.password !== formData.confirmPassword) {
setError('Las contraseñas no coinciden')
return
}
try {
// Registrar usuaria
authService.register({
...formData,
fechaRegistro: new Date().toISOString()
})
alert('Registro exitoso')
navigate('/login')
} catch (err) {
setError(err.message)
}
}
return (
    <div className='container'>
<h1>Registro</h1>
{/* Mostrar error */}
{error && <p>{error}</p>}
<form onSubmit={handleSubmit}>
<input
type='text'
name='nombre'
placeholder='Nombre'
onChange={handleChange}
required
/>
<input
type='email'
name='email'
placeholder='Correo'
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
type='text'
name='ciudad'
placeholder='Ciudad'
onChange={handleChange}
required
/>
<input
type='password'
name='password'
placeholder='Contraseña'
onChange={handleChange}
required
/>
<input
type='password'
name='confirmPassword'
placeholder='Confirmar contraseña'
onChange={handleChange}
required
/>
<button type='submit'>
Registrarse
</button>
</form>
</div>
)
}
export default UsuariaRegistro