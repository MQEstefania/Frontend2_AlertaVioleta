const authService = {

  register(userData) {

    const usuarios =
      JSON.parse(
        localStorage.getItem('usuarios')
      ) || []

    const existe = usuarios.some(

      user =>
        user.email === userData.email
    )

    if (existe) {

      throw new Error(
        'Este correo ya está registrado'
      )
    }

    usuarios.push(userData)

    localStorage.setItem(

      'usuarios',

      JSON.stringify(usuarios)
    )
  },

  login(email, password) {

    const usuarios =
      JSON.parse(
        localStorage.getItem('usuarios')
      ) || []

    const usuario = usuarios.find(

      user =>

        user.email === email &&
        user.password === password
    )

    if (!usuario) {

      throw new Error(
        'Correo o contraseña incorrectos'
      )
    }

    localStorage.setItem(

      'usuarioActual',

      JSON.stringify(usuario)
    )

    return usuario
  },

  logout() {

    localStorage.removeItem(
      'usuarioActual'
    )
  },

  getCurrentUser() {

    return JSON.parse(
      localStorage.getItem(
        'usuarioActual'
      )
    )
  }
}

export default authService