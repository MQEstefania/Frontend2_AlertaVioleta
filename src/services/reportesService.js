const reportesService = {

  obtenerReportes() {

    return JSON.parse(
      localStorage.getItem(
        'reportes'
      )
    ) || []
  },

  guardarReporte(reporte) {

    const reportes =
      this.obtenerReportes()

    reportes.push(reporte)

    localStorage.setItem(

      'reportes',

      JSON.stringify(reportes)
    )
  },

  eliminarReporte(id) {

    const reportes =
      this.obtenerReportes().filter(

        reporte =>
          reporte.id !== id
      )

    localStorage.setItem(

      'reportes',

      JSON.stringify(reportes)
    )
  },

  actualizarEstado(id, estado) {

    const reportes =
      this.obtenerReportes()

    const index =
      reportes.findIndex(

        reporte =>
          reporte.id === id
      )

    if (index !== -1) {

      reportes[index].estado =
        estado
    }

    localStorage.setItem(

      'reportes',

      JSON.stringify(reportes)
    )
  }
}

export default reportesService