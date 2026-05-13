import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
const navigate = useNavigate()
// Estados formulario
const [usuario, setUsuario] = useState('')
const [clave, setClave] = useState('')
// Error
const [error, setError] = useState('')
// Enviar formulario
const handleSubmit = (e) => {
e.preventDefault()
// Validar credenciales
if (
usuario === 'admin' &&
clave === 'admin123'
) {
navigate('/admin-dashboard')
} else {
setError('Credenciales incorrectas')
}
}
return (
<div className='container'>
<h1>Administrador</h1>
{error && <p>{error}</p>}
<form onSubmit={handleSubmit}>
<input
type='text'
placeholder='Usuario'
value={usuario}
onChange={(e) => setUsuario(e.target.value)}
/>
<input
type='password'
placeholder='Contraseña'
value={clave}
onChange={(e) => setClave(e.target.value)}
/>
<button type='submit'>
Ingresar
</button>
</form>
</div>
)
}
export default AdminLogin
