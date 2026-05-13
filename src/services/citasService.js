const citasService = {

  obtenerCitas(emailUsuario) {

    const citas =
      JSON.parse(
        localStorage.getItem(
          'citasProfesionales'
        )
      ) || []

    return citas.filter(

      cita =>
        cita.usuarioEmail ===
        emailUsuario
    )
  },

  guardarCita(citaData) {

    const citas =
      JSON.parse(
        localStorage.getItem(
          'citasProfesionales'
        )
      ) || []

    citas.push(citaData)

    localStorage.setItem(

      'citasProfesionales',

      JSON.stringify(citas)
    )
  }
}

export default citasService