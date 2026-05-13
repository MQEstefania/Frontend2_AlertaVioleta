// Objeto que maneja autenticación
const authService = {
// Registrar usuario
register(userData) {
// Obtener usuarios guardados
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
// Validar si ya existe
4
const existe = usuarios.some(
user => user.email === userData.email
)
// Si existe mostrar error
if (existe) {
throw new Error('El usuario ya existe')
}
// Agregar nuevo usuario
usuarios.push(userData)
// Guardar nuevamente
localStorage.setItem(
'usuarios',
JSON.stringify(usuarios)
)
},
// Iniciar sesión
login(email, password) {
// Obtener usuarios
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
// Buscar coincidencia
const usuario = usuarios.find(
user =>
user.email === email &&
user.password === password
)
// Si no existe
if (!usuario) {
throw new Error('Credenciales inválidas')
}
// Guardar usuario actual
localStorage.setItem(
'usuarioActual',
JSON.stringify(usuario)
)
return usuario
},
// Cerrar sesión
logout() {
localStorage.removeItem('usuarioActual')
},
// Obtener usuario actual
getCurrentUser() {
return JSON.parse(
localStorage.getItem('usuarioActual')
)
}
}
export default authService